# Calculator Application

A simple, modern calculator web application built with vanilla HTML, CSS, and JavaScript.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication)
- Clean and intuitive user interface
- Responsive design
- Real-time calculation display

## Getting Started

Simply open `index.html` in your web browser. No build process or dependencies required.

## Usage

1. Click number buttons to enter digits
2. Click an operator button (+, -, *) to select an operation
3. Enter the second number
4. Click the equals (=) button to calculate the result
5. Click Clear (C) to reset the calculator

## Project Structure

```
tl_tech_task/
├── index.html          # Main calculator application
├── README.md           # Project documentation
├── .htmlvalidate.json  # HTML validation configuration
└── .github/            # GitHub templates and workflows
    ├── pull_request_template.md
    └── workflows/
        └── ci.yml      # GitHub Actions CI workflow
```

## Development

This is a single-file application. All HTML, CSS, and JavaScript are contained in `index.html`.

## Contributing

We welcome contributions! Please follow these guidelines:

1. **Branch Naming**: Use the format `feature/<issue>-description`
   - Example: `feature/CALC-4-add-division`
   - Fork the repository and create your branch from the fork

2. **Keep PRs Small**: Pull requests should be under 500 lines of code
   - Break large features into smaller, focused PRs
   - Each PR should address a single concern

3. **Requirements Before Merging**:
   - ✅ CI checks must pass
   - ✅ 1-2 approvals required
   - ✅ Code owner review (if CODEOWNERS is configured)

## CI/CD

This repository uses GitHub Actions for continuous integration. The CI workflow automatically:
- Validates HTML structure and syntax
- Checks JavaScript syntax
- Performs code quality checks
- Runs on every push and pull request

See `.github/workflows/ci.yml` for the complete CI configuration.

## License

[Add your license here]

