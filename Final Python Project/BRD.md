# BRD: StatementSense (Python only)

## 1. Purpose
A command-line Python program that reads a monthly credit card statement
exported from Alrajhi Bank as an Excel (.xlsx) file, assigns each transaction
to a spending category, and prints total spending per category.

## 2. Background
The bank's export lists transactions with no categories or totals.
Doing this by hand every month is impractical. The tool automates it.

## 3. Scope
In scope: reading the file, cleaning, categorizing, grouping, totals, printing, tests, README.
Out of scope: any web page, GUI, charts, database, or percentages.

## 4. Input
- File: `sample_statement.xlsx` (sanitized sample, real transactions).
- Read with the `python-calamine` library (the file's internal structure
  fails with some other libraries).
- Rows contain a blank first column, a transaction date, a description,
  a transaction amount, and a billing amount in SAR.
- Every value arrives as text.
- Claude must inspect the real file first and confirm the exact column
  positions, date format and amount format before coding.

## 5. Business rules
- BR-1: Keep only date, description and billing amount (SAR). Drop all other columns.
- BR-2: Convert the date text to a `datetime.date` and the amount text to a `float`.
- BR-3: Assign a category when a keyword from a `category_map` dictionary appears
  in the description (case-insensitive).
- BR-4: Anything with no keyword match goes to the category "Other".
- BR-5: Discard rows that are not real spending, for example advance
  payments and Murabaha profit or refund entries. Use a short list of phrases.
- BR-6: Discarding must not mutate a list while looping over it. Build a new list.

## 6. Functional requirements
Required file: `project.py`, with exactly these functions:
- FR-1 `clean_transactions(transactions)` -> list of dicts with date (date object),
  description (str), amount (float).
- FR-2 `categorize(clean_data)` -> same dicts plus a "Category" key; applies BR-3 to BR-6.
- FR-3 `group_by_category(category_statement)` -> dict: category -> list of
  transactions. Use `collections.defaultdict(list)`.
- FR-4 `sum_by_category(grouped_statement)` -> dict: category -> total.
  Use `sum()` with a generator expression.
- FR-5 `main()` -> reads the file, runs FR-1 to FR-4 in order, prints totals per category.

## 7. Non-functional requirements
- Python 3. Only third-party package: `python-calamine`.
- Standard library is fine: `datetime`, `collections`, `pprint`.
- Readable code, a short comment per function, no unused code.

## 8. Deliverables
- `project.py`, `test_project.py`, `requirements.txt`, `README.md`.

## 9. Acceptance criteria
- AC-1: `python project.py` prints a total for every category found.
- AC-2: `pytest` passes, with tests for at least `clean_transactions`,
  `categorize` and `sum_by_category`, using small hand-made inputs
  (not the full file).
- AC-3: Dates are `datetime.date` and amounts are `float` after cleaning.
- AC-4: Unknown merchants appear under "Other". Discarded rows never appear.
- AC-5: The totals add up to the sum of all kept transactions.

## 10. Open questions (Claude must answer or ask before coding)
1. What are the exact columns, date format and amount format in the file?
2. Which categories exist in this sample, and which keywords map to them?
   Propose a `category_map` and wait for my approval.
3. Which description phrases mark non-spending rows (BR-5)?

## 11. Working agreement with Claude Code
- I am a beginner. Explain each step in plain words before and after.
- Work in small stages: one function at a time, then run it and show me.
- Plan first. Don't edit files until I approve the plan.
- Don't assume. If something is unclear, ask me.
- Stay inside this repo and don't touch other projects.
