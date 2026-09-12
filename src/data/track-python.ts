import type { Track } from "./types";

export const pythonTrack: Track = {
  id: "python",
  title: "Python & Data Fundamentals",
  blurb: "Python syntax, OOP, and the pandas/numpy data workflow — reading track.",
  numeral: "Ⅴ",
  lessons: [
    {
      id: "python-syntax",
      title: "Python Syntax & Core Collections",
      minutes: 10,
      reading: true,
      body: `Python trades braces for **indentation** — the whitespace *is* the syntax:

\`\`\`
def greet(name):
    if not name:
        return "Hello, stranger"
    return f"Hello, {name}!"
\`\`\`

**The four core collections:**

\`\`\`
nums = [1, 2, 3]              # list   — ordered, mutable
point = (3, 4)                # tuple  — ordered, immutable
tags = {"py", "data"}         # set    — unique, unordered
user = {"name": "Ada", "age": 36}   # dict — key→value
\`\`\`

**Slicing** works on any sequence: \`nums[1:3]\`, \`nums[::-1]\` (reversed), \`s[:2] + s[2:]\`.

**List comprehensions** are Python's signature move — map + filter in one readable line:

\`\`\`
squares = [n * n for n in nums]
evens   = [n for n in nums if n % 2 == 0]
pairs   = [(x, y) for x in "ab" for y in (1, 2)]
\`\`\`

**Generators** yield values lazily — constant memory over huge streams:

def countdown(n):
    while n > 0:
        yield n
        n -= 1

total = sum(countdown(1_000_000))   # never materializes the list
\`\`\`

**f-strings** format anything: \`f"{user['name']} is {user['age']:>3} years old"\`.

Rule of thumb: list for order, tuple for fixed shapes, set for membership, dict for lookups.`,
      predict: [
        {
          prompt: "What does this Python print?",
          code: `nums = [1, 2, 3, 4]
result = [n * 2 for n in nums if n % 2 == 0]
print(result)`,
          options: ["[2, 4, 6, 8]", "[4, 8]", "[2, 4]", "[4, 8, 12, 16]"],
          answer: 1,
          explanation:
            "The filter keeps even numbers (2, 4) FIRST, then maps ×2 → [4, 8]. In comprehensions, `if` filters before the expression runs.",
        },
        {
          prompt: "And this one?",
          code: `def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item(1))
print(add_item(2))`,
          options: [
            "[1] then [2] — a fresh list each call",
            "[1] then [1, 2] — the default list is created ONCE at function definition",
            "[1] then None",
            "It raises a TypeError",
          ],
          answer: 1,
          explanation:
            "Python's infamous mutable default: the [] is evaluated once when `def` runs, so both calls share the same list. Use `items=None` and create inside.",
        },
      ],
      quiz: [
        {
          q: "Which collection is immutable?",
          options: ["list", "tuple", "dict", "set"],
          answer: 1,
          explanation: "Tuples can't be modified after creation — good for fixed records.",
        },
        {
          q: "[n*n for n in range(4)] evaluates to…",
          options: ["[0,1,2,3]", "[0,1,4,9]", "[1,4,9,16]", "An error"],
          answer: 1,
          explanation: "range(4) is 0..3; each is squared.",
        },
        {
          q: "A generator function uses…",
          options: ["return", "yield", "pass", "raise"],
          answer: 1,
          explanation:
            "yield pauses and hands back one value at a time — lazy evaluation.",
        },
        {
          q: "nums[::-1] returns…",
          options: ["The first element", "A reversed copy", "An error", "Every 2nd element"],
          answer: 1,
          explanation: "Step -1 walks the sequence backwards.",
        },
        {
          q: "Constant memory while summing a huge series suggests…",
          options: ["A list comprehension", "A generator", "A tuple", "A set"],
          answer: 1,
          explanation: "Generators stream values instead of materializing them.",
        },
      ],
    },
    {
      id: "python-oop",
      title: "OOP: Classes, Inheritance & Exceptions",
      minutes: 10,
      reading: true,
      body: `Classes bundle **data + behavior**:

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner          # public attribute
        self._balance = balance     # _convention: internal

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("amount must be positive")
        self._balance += amount
        return self._balance

    @property
    def balance(self):              # computed attribute
        return self._balance
\`\`\`

**Inheritance** — subclass, extend, override; \`super()\` calls up:

class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0, rate=0.02):
        super().__init__(owner, balance)
        self.rate = rate

    def add_interest(self):
        self.deposit(self._balance * self.rate)
\`\`\`

**Duck typing** is Python's philosophy: behavior over type — anything with \`.deposit()\` works where an account is expected. \`dataclasses\` remove the boilerplate for plain data holders.

**Exception handling** — catch *specific*, handle *meaningfully*:

try:
    risky()
except ValueError as err:
    print(f"bad input: {err}")
except (KeyError, IndexError):
    print("missing data")
else:
    print("only on success")
finally:
    close_resources()   # always runs
\`\`\`

Never bare-\`except:\` (it swallows your own bugs). For cleanup, prefer context managers:

with open("data.csv") as f:    # closes even on exception
    rows = f.readlines()
\`\`\``,
      quiz: [
        {
          q: "__init__ runs when…",
          options: ["The class is defined", "A new instance is created", "The program exits", "Any method is called"],
          answer: 1,
          explanation: "It's the constructor — initialize instance attributes there.",
        },
        {
          q: "super().__init__() does what?",
          options: [
            "Deletes the parent",
            "Runs the parent class's initializer",
            "Creates a static method",
            "Nothing",
          ],
          answer: 1,
          explanation: "It delegates construction up the chain before adding subclass state.",
        },
        {
          q: "@property lets you…",
          options: [
            "Access a computed value like an attribute",
            "Make methods private",
            "Define constants",
            "Skip __init__",
          ],
          answer: 0,
          explanation: "balance instead of balance() — getter syntax with method logic.",
        },
        {
          q: "Why avoid bare except:?",
          options: [
            "It's slow",
            "It catches everything — including your own bugs and KeyboardInterrupt",
            "It only works in Python 2",
            "It skips finally",
          ],
          answer: 1,
          explanation: "Catch specific exceptions so real errors still surface.",
        },
        {
          q: "The 'with open(...)' pattern guarantees…",
          options: [
            "Faster reads",
            "The file closes even if an exception occurs",
            "Compression",
            "Encoding fixes",
          ],
          answer: 1,
          explanation: "Context managers pair setup/teardown deterministically.",
        },
      ],
    },
    {
      id: "pandas-numpy",
      title: "Data Wrangling: NumPy & pandas",
      minutes: 12,
      reading: true,
      body: `**NumPy** — C-speed math on arrays. The superpower is **vectorization**: express operations whole-array, never loop.

import numpy as np
prices = np.array([10.0, 20.0, 30.0])
with_tax = prices * 1.19          # elementwise — no loop
big = np.arange(1_000_000)
# big.sum() runs in ~0.5ms vs ~25ms for a pure-Python loop
\`\`\`

**pandas** — labeled tables (DataFrames) on top of NumPy:

import pandas as pd
df = pd.read_csv("sales.csv")

df.head()                       # peek
df.info()                       # dtypes + missing counts
df.describe()                   # stats summary
\`\`\`

**The cleaning ritual:**

df = df.dropna(subset=["price"])            # drop missing criticals
df["price"] = df["price"].astype(float)
df["revenue"] = df["qty"] * df["price"]      # vectorized new column
df = df[df["qty"] > 0]                       # boolean filtering
df["region"] = df["region"].str.strip().str.title()
\`\`\`

**Group-by → aggregate** is the heart of analysis:

summary = (df.groupby("region")
             .agg(total=("revenue", "sum"), orders=("revenue", "count"))
             .sort_values("total", ascending=False))
\`\`\`

**Merging** = SQL joins: \`pd.merge(orders, customers, on="customer_id", how="left")\`.

Workflow rule: profile first (\`info\`/\`describe\`), clean second, analyze third — and keep a random \`df.sample(5)\` eyeball-check in the loop. Garbage in, confident nonsense out.`,
      quiz: [
        {
          q: "Vectorization means…",
          options: [
            "Using for loops carefully",
            "Applying operations to whole arrays at C speed",
            "Using lists",
            "Parallelizing across servers",
          ],
          answer: 1,
          explanation: "NumPy pushes loops into compiled C — often 50–100× faster.",
        },
        {
          q: "df.groupby('region').agg(...) is analogous to…",
          options: ["SQL GROUP BY + aggregates", "A JS map", "Sorting", "A pivot table export"],
          answer: 0,
          explanation: "Split → apply → combine; same semantics as SQL grouping.",
        },
        {
          q: "df[df['qty'] > 0] returns…",
          options: [
            "A view that mutates df",
            "Rows where the condition holds (a filtered frame)",
            "A single boolean",
            "The column qty",
          ],
          answer: 1,
          explanation: "Boolean indexing — the mask selects matching rows.",
        },
        {
          q: "First step on a fresh dataset?",
          options: [
            "Fit a model",
            "Profile it: info(), describe(), head()",
            "Delete duplicates",
            "Plot everything",
          ],
          answer: 1,
          explanation: "Understand dtypes and missingness before transforming anything.",
        },
        {
          q: "how='left' in pd.merge keeps…",
          options: [
            "Only matching rows",
            "All rows from the left frame, matched where possible",
            "All rows from both",
            "Random rows",
          ],
          answer: 1,
          explanation: "Left join semantics — exactly like SQL's LEFT JOIN.",
        },
      ],
    },
    {
      id: "matplotlib-ml",
      title: "Visualize & Predict: Matplotlib → ML Basics",
      minutes: 12,
      reading: true,
      body: `**Visualization** is analysis's proof layer — you spot patterns before you compute them.

import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(8, 4))
ax.hist(df["revenue"], bins=30)          # distribution
ax.scatter(df["qty"], df["revenue"], alpha=0.4)  # relationship
ax.plot(dates, rolling_avg)              # trend
ax.set(title="Revenue by day", xlabel="date", ylabel="$")
plt.tight_layout()
\`\`\`

Chart-choice cheat sheet: **histogram** = distribution · **scatter** = relationship · **line** = time trend · **bar** = category comparison · **heatmap** = matrix.

**The ML entry point** — scikit-learn's one API to rule them all:

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

X = df[["qty", "unit_price"]]      # features
y = df["revenue"]                  # target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

model = LinearRegression().fit(X_train, y_train)
preds = model.predict(X_test)
print("MAE:", mean_absolute_error(y_test, preds))
print("qty effect: +$", model.coef_[0], "per unit")
\`\`\`

**The iron rules:**
1. **Split before anything** — test data must simulate the future, so the model never sees it during fitting (or scaling!).
2. **A baseline first** (predict the mean) — beat it or the model is worthless.
3. **Error metric matches the business**: MAE = average miss in real units; RMSE punishes big misses.
4. Overfitting signal: train error ≪ test error. Fix with more data, fewer features, or regularization.`,
      quiz: [
        {
          q: "Best chart for a variable's distribution?",
          options: ["Line", "Histogram", "Bar", "Pie"],
          answer: 1,
          explanation: "Histograms bin values to reveal shape, center, and outliers.",
        },
        {
          q: "Why split before fitting?",
          options: [
            "To save memory",
            "The test set must simulate unseen data — leaking it inflates scores",
            "sklearn requires two files",
            "For faster training",
          ],
          answer: 1,
          explanation: "Post-split evaluation is the only honest performance estimate.",
        },
        {
          q: "model.coef_ tells you…",
          options: [
            "The prediction error",
            "Each feature's learned effect on the target",
            "The learning rate",
            "Number of rows",
          ],
          answer: 1,
          explanation: "Linear coefficients = effect per unit of the feature, holding others fixed.",
        },
        {
          q: "Train error 2%, test error 30% means…",
          options: [
            "A great model",
            "Overfitting — memorized training data",
            "Underfitting",
            "Data leakage downward",
          ],
          answer: 1,
          explanation: "The generalization gap is the overfitting signature.",
        },
        {
          q: "MAE is preferred over RMSE when…",
          options: [
            "Big outliers should dominate",
            "You want 'average miss' in real units, robust to outliers",
            "Data is categorical",
            "There is no target",
          ],
          answer: 1,
          explanation: "MAE is interpretable and outlier-robust; RMSE amplifies large errors.",
        },
      ],
    },
  ],
};
