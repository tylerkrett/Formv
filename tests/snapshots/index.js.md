# Snapshot report for `tests/index.js`

The actual snapshot is saved in `index.js.snap`.

Generated by [AVA](https://ava.li).

## It should be able to bypass validation with `formNoValidate` attribute;

> Snapshot 1

    [
      'Please enter your first name.',
      'Please enter your email address.',
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 2

    []

> Snapshot 3

    'We have successfully pretended to send your message!'

## It should be able to handle API validation messages;

> Snapshot 1

    []

## It should be able to handle generic validation messages;

> Snapshot 1

    [
      'An unexpected occurred when pretending to send your message.',
    ]

## It should be able to handle the reset which clears validation messages;

> Snapshot 1

    [
      'Please enter your first name.',
      'Please enter your email address.',
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 2

    []

## It should be able to show the validation messages;

> Snapshot 1

    [
      'Please enter your first name.',
      'Please enter your email address.',
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 2

    [
      'Please enter your email address.',
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 3

    [
      'Please enter a valid email address.',
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 4

    [
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 5

    []

> Snapshot 6

    'We have successfully pretended to send your message!'

## It should be able to show validation messages from the custom validator;

> Snapshot 1

    [
      'Bots are not allowed to send messages.',
      'Please enter your email address.',
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 2

    [
      'Bots are not allowed to send messages.',
    ]

## It should be adding the "invalid" class name to the invalid fields;

> Snapshot 1

    [
      'Please enter your first name.',
      'Please enter your email address.',
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 2

    [
      'Please enter your email address.',
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 3

    [
      'Please enter a valid email address.',
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 4

    [
      'Please ensure your message is at least 20 characters.',
    ]

> Snapshot 5

    []

> Snapshot 6

    'We have successfully pretended to send your message!'
