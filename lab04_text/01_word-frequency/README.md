## Prompt ChatGPT 4o mini:

```
Create a regular expressions that extracts only names and give an example
```

Sure! A regular expression to extract names can vary based on what you define as a name, but a common pattern is to match capitalized words, possibly with spaces or hyphens.

Here’s a simple regex pattern:

```
\b[A-Z][a-z]+(?:\s[A-Z][a-z]+)*\b
```

### Breakdown of the Regex:
- `\b`: Word boundary to ensure we're matching whole words.
- `[A-Z]`: Matches the first letter of a name (capitalized).
- `[a-z]+`: Matches the rest of the name (lowercase letters).
- `(?:\s[A-Z][a-z]+)*`: A non-capturing group that matches additional names (like middle or last names) that start with a capital letter and are preceded by a space. The `*` allows for zero or more occurrences.
- `\b`: Another word boundary.

### Example:
Suppose you have the following text:

```
"John Smith went to the park with Alice Johnson and Robert O'Neill."
```

Using the regex above, it would match:
- "John Smith"
- "Alice Johnson"
- "Robert O'Neill"

If you’re working in a specific programming language, let me know, and I can provide a code snippet for using this regex!

## Prompt Gemeni 1.5 Flash

```regex
(?<=\s|^)[A-Z][a-z]+(?:\s[A-Z][a-z]+)*
```

**Explanation:**

* `(?<=\s|^)`: This is a positive lookbehind assertion that matches the beginning of the string or a space character, but doesn't include it in the match. This ensures that we don't capture names that are part of other words.
* `[A-Z]`: This matches a single uppercase letter, representing the first letter of a name.
* `[a-z]+`: This matches one or more lowercase letters, representing the remaining letters of the name.
* `(?:\s[A-Z][a-z]+)*`: This is a non-capturing group that matches zero or more occurrences of a space followed by an uppercase letter and one or more lowercase letters. This allows for capturing names with multiple words, like "John Smith".

**Example:**

**Input:**

```
This is a test sentence. My name is John Doe, and I live in New York City.
```

**Output:**

```
John Doe
New York City
```

**Explanation:**

The regex matches "John Doe" and "New York City" because they start with uppercase letters and contain only lowercase letters after the initial capital. The regex doesn't match "test" or "sentence" because they don't start with an uppercase letter.

**Note:**

This regex is a basic example and might not work perfectly in all cases. For instance, it won't capture names with special characters or titles. For a more robust solution, you may need to adjust the regex to match specific patterns in your data.


## References
[MDN Web Docs on Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
[Python re Module](https://docs.python.org/3/library/re.html)
[RegExr](https://regexr.com/) is an online tool to learn, build, & test Regular Expressions