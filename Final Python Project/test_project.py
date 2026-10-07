import pytest
from datetime import date
from project import clean_transactions, categorize, sum_by_category, group_by_category


class TestCleanTransactions:
    def test_converts_date_to_date_object(self):
        # Test that date text "01/04/26" becomes a date object
        rows = [["1000.00", "0.00", "Test", "1000.00SAR", "01/04/26", "01/04/26"]]
        result = clean_transactions(rows)
        assert len(result) == 1
        assert result[0]["date"] == date(2026, 4, 1)
        assert isinstance(result[0]["date"], date)

    def test_converts_amount_to_float(self):
        # Test that amount text "1,438.39" becomes a float
        rows = [["1,438.39", "0.00", "Test", "1,438.39SAR", "01/04/26", "01/04/26"]]
        result = clean_transactions(rows)
        assert len(result) == 1
        assert result[0]["amount"] == 1438.39
        assert isinstance(result[0]["amount"], float)

    def test_handles_cr_credit_as_negative(self):
        # Test that "CR   100.00" becomes -100.0
        rows = [["CR   100.00", "0.00", "Refund", "100.00SAR", "01/04/26", "01/04/26"]]
        result = clean_transactions(rows)
        assert len(result) == 1
        assert result[0]["amount"] == -100.0

    def test_skips_empty_rows(self):
        # Empty rows should not appear in result
        rows = [
            ["1000.00", "0.00", "Test", "1000.00SAR", "01/04/26", "01/04/26"],
            ["", "", "", "", "", ""],
            ["500.00", "0.00", "Another", "500.00SAR", "02/04/26", "02/04/26"]
        ]
        result = clean_transactions(rows)
        assert len(result) == 2

    def test_keeps_description_string(self):
        # Description stays as provided
        rows = [["100.00", "0.00", "HUNGERSTATION LLCRIYADH", "100.00SAR", "01/04/26", "01/04/26"]]
        result = clean_transactions(rows)
        assert result[0]["description"] == "HUNGERSTATION LLCRIYADH"


class TestCategorize:
    def test_assigns_category_from_keywords(self):
        # "HUNGERSTATION" should match "Home Delivery"
        data = [{"date": date(2026, 4, 1), "description": "HUNGERSTATION LLCRIYADH", "amount": 88.58}]
        result = categorize(data)
        assert len(result) == 1
        assert result[0]["Category"] == "Home Delivery"

    def test_case_insensitive_matching(self):
        # Keywords should match case-insensitively
        data = [{"date": date(2026, 4, 1), "description": "noon riyadh", "amount": 96.74}]
        result = categorize(data)
        assert result[0]["Category"] == "Groceries"

    def test_unknown_merchant_goes_to_other(self):
        # Unknown descriptions go to "Other"
        data = [{"date": date(2026, 4, 1), "description": "UNKNOWN SHOP ABC", "amount": 50.0}]
        result = categorize(data)
        assert result[0]["Category"] == "Other"

    def test_discards_advance_payment(self):
        # Rows with "ADVANCE PAYMENT" should be removed
        data = [
            {"date": date(2026, 4, 1), "description": "Advance Payment 2026-04-20", "amount": 796.05},
            {"date": date(2026, 4, 1), "description": "HUNGERSTATION", "amount": 88.58}
        ]
        result = categorize(data)
        assert len(result) == 1
        assert result[0]["description"] == "HUNGERSTATION"

    def test_discards_murabaha(self):
        # Rows with "MURABAHA" should be removed
        data = [
            {"date": date(2026, 4, 1), "description": "Murabaha Profit Instalment # 1", "amount": 1068.49},
            {"date": date(2026, 4, 1), "description": "HUNGERSTATION", "amount": 88.58}
        ]
        result = categorize(data)
        assert len(result) == 1


class TestSumByCategory:
    def test_sums_amounts_per_category(self):
        # Test that amounts are summed correctly per category
        grouped = {
            "Groceries": [
                {"amount": 100.0},
                {"amount": 50.0}
            ],
            "Other": [
                {"amount": 25.0}
            ]
        }
        result = sum_by_category(grouped)
        assert result["Groceries"] == 150.0
        assert result["Other"] == 25.0

    def test_handles_negative_amounts(self):
        # Refunds (negative amounts) should reduce category totals
        grouped = {
            "Groceries": [
                {"amount": 100.0},
                {"amount": -50.0}  # Refund
            ]
        }
        result = sum_by_category(grouped)
        assert result["Groceries"] == 50.0


class TestGroupByCategory:
    def test_groups_transactions_by_category(self):
        # Transactions should be grouped by their Category key
        data = [
            {"Category": "Groceries", "amount": 100.0},
            {"Category": "Groceries", "amount": 50.0},
            {"Category": "Other", "amount": 25.0}
        ]
        result = group_by_category(data)
        assert len(result["Groceries"]) == 2
        assert len(result["Other"]) == 1

    def test_totals_add_up_to_sum_of_all_kept_rows(self):
        # Verify that category totals sum to the grand total
        data = [
            {"Category": "Groceries", "amount": 100.0},
            {"Category": "Groceries", "amount": 50.0},
            {"Category": "Travel", "amount": 200.0},
            {"Category": "Other", "amount": 25.0}
        ]
        grouped = group_by_category(data)
        totals = sum_by_category(grouped)
        grand_total = sum(totals.values())
        assert grand_total == 375.0
