from datetime import datetime
from collections import defaultdict
from python_calamine import CalamineWorkbook


category_map = {
    "Groceries": ["TAMIMI", "NOON", "MUGHASIL AWAL NAZIF",
                  "ALJABR LAUNDRIES", "DANUBE", "HOME BAKERY", "ANANINJA", "MAKHAZEN ALENAYA"],
    "Gas and Transportation": ["LITER CO", "UBER", "CAREEM", "Biller ID: ", "AL FRANSI PAYMENT SERVICES",
                               "KING ABDULLAH FINANCIA"],
    "Utilities and bills": ["YAMMAK", "JUSTLIFE", "SAUDI ELECTRICITY", "STC"],
    "Home Delivery": ["HUNGERSTATION", "JAHEZ", "KEETA"],
    "Shopping": ["ALHUSSAIN TOP UP", "SEPHORA", "ADIDAS", "LULULEMON", "AMAZON",
                 "BOUTIQUE", "MARKS", "SPENCER", "CITY CHAIN",
                 "IBRAHIM AL QURASHI", "ROYAL ROSES TRADING"],
    "Flights": ["FLYNAS", "SAUDI AIRLINES", "EMIRATES AIRLINE", "HKAIRWEB", "AL MOSAFER"],
    "Entertainment and Hangouts": ["WEBOOK", "BUTCHER SHOP", "CREEP AFFIRE", "CENTURY CORNER",
                                   "SAIV JAR", "ANAB GROUP", "SUKKLY", "FLOUR AND FIREWOOD",
                                   "VOXCINEMAS", "POPEYES", "AL TAZAJ", "KFC",
                                   "BURGERKING", "FALAFEL", "SHAWARMA", "KUSHARI",
                                   "COFFEE", "ALQASBAH", "TAWUNIYA", "CLEMENTINE",
                                   "ALNAHAR NATIONAL COMPA", "O ME", "AMJAD FAHAD",
                                   "MESHAL ALITHAMI", "FOUR MAHAS"],
    "Health and Medicine": ["SADAA ALWAHA", "WHITES", "ALNAHDI", "HEALTH HOUSE PHARMACY",
                            "NMC", "76RIYADH", "SGH", "MJMA RKN ALKSAYY ALTBY"],
    "Personal Expenses": ["HAN WAAD", "HAN ALWAAD", "MAHARAT KITRANQ", "SHAHY ABU WALEED",
                          "ANTHROPIC", "CLAUDE.AI", "ISSUANCE FEE", "USE.AI", "MOBILY",
                          "COMMERCIAL DIGITAL CATERI", "FATIMA BAKHIT ALZUBAI"],
    "Travel": ["BOOKING.COM", "BKG*HOTEL", "7-ELEVEN", "7-ELEVEN, HK", "CIRCLE K",
               "DON DON DONKI", "ONITSUKA TIGER", "MTR - RIDES", "CITYBUS", "KOWLOON MOTO",
               "DISNEYLAND", "HK INT'L THEME PARKS", "PEAK TRAMWAYS"]
}

discard_phrases = ["ADVANCE PAYMENT", "MURABAHA"]


def clean_transactions(transactions):
    # Convert raw Excel rows to dicts with date (date object), description (str), amount (float).
    cleaned = []
    for row in transactions:
        # Row structure: [Billing Amount, Other fees, Description, Transaction Amount, Posting Date, Transaction Date, ...]
        amount_text = str(row[0]).strip() if row[0] else ""
        date_text = str(row[5]).strip() if row[5] else ""
        description = str(row[2]).strip() if row[2] else ""

        # Skip empty rows
        if not amount_text or not date_text or not description:
            continue

        # Handle CR (credit) prefix by stripping it and converting to negative
        if amount_text.startswith("CR"):
            amount_text = amount_text[2:].strip()
            is_credit = True
        else:
            is_credit = False

        # Remove commas and convert to float
        try:
            amount = float(amount_text.replace(",", ""))
            if is_credit:
                amount = -amount
        except ValueError:
            continue

        # Parse date from dd/mm/yy format
        try:
            date_obj = datetime.strptime(date_text, "%d/%m/%y").date()
        except ValueError:
            continue

        cleaned.append({
            "date": date_obj,
            "description": description,
            "amount": amount
        })

    return cleaned


def categorize(clean_data):
    # Assign a category based on keywords in description; discard non-spending rows.
    categorized = []
    for transaction in clean_data:
        desc_upper = transaction["description"].upper()

        # Check if this is a non-spending row (BR-5)
        if any(phrase in desc_upper for phrase in discard_phrases):
            continue

        # Find the first matching category (BR-3)
        matched_category = "Other"
        for category, keywords in category_map.items():
            if any(keyword.upper() in desc_upper for keyword in keywords):
                matched_category = category
                break

        transaction["Category"] = matched_category
        categorized.append(transaction)

    return categorized


def group_by_category(category_statement):
    # Group transactions by category using defaultdict.
    grouped = defaultdict(list)
    for transaction in category_statement:
        grouped[transaction["Category"]].append(transaction)
    return grouped


def sum_by_category(grouped_statement):
    # Sum amounts per category using sum() with a generator expression.
    totals = {}
    for category, transactions in grouped_statement.items():
        totals[category] = sum(t["amount"] for t in transactions)
    return totals


def main():
    wb = CalamineWorkbook.from_path("sample_statement.xlsx")
    sheet = wb.get_sheet_by_name(wb.sheet_names[0])
    rows = sheet.to_python()

    transaction_rows = rows[47:138]

    cleaned = clean_transactions(transaction_rows)
    categorized = categorize(cleaned)
    grouped = group_by_category(categorized)
    totals = sum_by_category(grouped)

    # Print totals per category
    print("Spending by Category:")
    print("-" * 50)
    for category in sorted(totals.keys()):
        print(f"  {category:30} {totals[category]:10.2f} SAR")
    print("-" * 50)
    print(f"  {'TOTAL':30} {sum(totals.values()):10.2f} SAR")


if __name__ == "__main__":
    main()
