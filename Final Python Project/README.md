# StatementSense

A command-line Python tool that reads a credit card statement (Alrajhi Bank .xlsx export), automatically categorizes transactions, and prints total spending per category.

## Purpose

Alrajhi Bank exports include raw transaction data with no categories or totals. Doing this by hand each month is tedious. StatementSense automates it.

## Features

- **Reads Excel files** using `python-calamine` (handles Alrajhi's .xlsx format)
- **Cleans data**: converts dates to `datetime.date` objects, amounts to floats
- **Filters non-spending rows**: removes advance payments and Murabaha entries
- **Handles refunds**: credit rows (marked with `CR`) are treated as negative amounts
- **Categorizes transactions**: uses keywords to assign transactions to spending categories
- **Prints totals**: shows spending by category in a clean summary

## Installation

```bash
pip install -r requirements.txt
```

## Usage

```bash
python project.py
```

Reads `sample_statement.xlsx` from the current directory and prints:

```
Spending by Category:
--------------------------------------------------
  Entertainment and Hangouts        1630.67 SAR
  Flights                          16322.18 SAR
  ... (more categories)
--------------------------------------------------
  TOTAL                            34328.96 SAR
```

## File Structure

- **`project.py`**: main program with 5 functions
  - `clean_transactions()`: converts raw rows to dicts with date, description, amount
  - `categorize()`: assigns categories and filters non-spending rows
  - `group_by_category()`: groups transactions by category
  - `sum_by_category()`: calculates totals per category
  - `main()`: orchestrates the pipeline and prints results
- **`test_project.py`**: pytest suite covering all functions (14 tests, all passing)
- **`requirements.txt`**: dependencies (`python-calamine`, `pytest`)
- **`sample_statement.xlsx`**: sanitized sample statement from Alrajhi Bank

## Categories

Transactions are matched against keywords (case-insensitive) and assigned to:

- **Groceries**: Tamimi, Noon, Makhazen, Danube, etc.
- **Gas and Transportation**: Liter Co, Careem, Uber, Sadad bills, etc.
- **Utilities and Bills**: Yammak, JustLife, Saudi Electricity, STC
- **Home Delivery**: Hungerstation, Jahez, Keeta
- **Shopping**: Sephora, Adidas, Lululemon, Amazon, Boutique, etc.
- **Flights**: Flynas, Emirates, Saudi Airlines, Al Mosafer, etc.
- **Entertainment and Hangouts**: Butcher Shop, Shawarma, Falafel, Cafes, Tawuniya, etc.
- **Health and Medicine**: SGH, NMC, Alnahdi, Pharmacy, etc.
- **Personal Expenses**: Mobily, Claude.ai, Laundry, Haircut, etc.
- **Travel**: Hotels via Booking.com, convenience stores, theme parks (Asia trips)
- **Other**: anything without a keyword match

## How it works

1. **Read**: Loads the .xlsx file and extracts transaction rows
2. **Clean**: Converts dates and amounts, handles credit rows (negative)
3. **Categorize**: Matches keywords in descriptions, removes non-spending rows
4. **Group**: Organizes transactions by category
5. **Sum**: Calculates totals per category
6. **Print**: Shows a summary sorted by category name

## Requirements

- Python 3.7+
- `python-calamine`: reads .xlsx files
- `pytest`: for running tests

## Testing

```bash
pytest test_project.py -v
```

Tests cover:
- Date and amount type conversions
- Credit row handling (negative amounts)
- Keyword matching and categorization
- Non-spending row filtering (advance payments, Murabaha)
- Grouping and summing logic
- Totals reconciliation

All 14 tests pass.

## Notes

- Dates are parsed from `dd/mm/yy` format (e.g., 30/03/26)
- Amounts are SAR (Saudi Riyals) from the Billing Amount column
- Credit rows (refunds, reversals) show as negative amounts and reduce category totals
- Descriptions may contain garbled merchant names (spaces removed, cities concatenated)
- Foreign currency transactions are converted to SAR by the bank; only SAR amounts are used

## Author

Written with Claude Code.
