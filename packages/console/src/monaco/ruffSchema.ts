// Copied from https://github.com/astral-sh/ruff/blob/0.6.2/ruff.schema.json
// Update the tag to the right version if updating the Ruff version

// Schema v0.6.2
const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Options',
  type: 'object',
  properties: {
    'allowed-confusables': {
      description:
        'A list of allowed "confusable" Unicode characters to ignore when enforcing `RUF001`, `RUF002`, and `RUF003`.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        type: 'string',
        maxLength: 1,
        minLength: 1,
      },
    },
    builtins: {
      description:
        'A list of builtins to treat as defined references, in addition to the system builtins.',
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    'cache-dir': {
      description:
        'A path to the cache directory.\n\nBy default, Ruff stores cache results in a `.ruff_cache` directory in the current project root.\n\nHowever, Ruff will also respect the `RUFF_CACHE_DIR` environment variable, which takes precedence over that default.\n\nThis setting will override even the `RUFF_CACHE_DIR` environment variable, if set.',
      type: ['string', 'null'],
    },
    'dummy-variable-rgx': {
      description:
        'A regular expression used to identify "dummy" variables, or those which should be ignored when enforcing (e.g.) unused-variable rules. The default expression matches `_`, `__`, and `_var`, but not `_var_`.',
      deprecated: true,
      type: ['string', 'null'],
    },
    exclude: {
      description:
        "A list of file patterns to exclude from formatting and linting.\n\nExclusions are based on globs, and can be either:\n\n- Single-path patterns, like `.mypy_cache` (to exclude any directory named `.mypy_cache` in the tree), `foo.py` (to exclude any file named `foo.py`), or `foo_*.py` (to exclude any file matching `foo_*.py` ). - Relative patterns, like `directory/foo.py` (to exclude that specific file) or `directory/*.py` (to exclude any Python files in `directory`). Note that these paths are relative to the project root (e.g., the directory containing your `pyproject.toml`).\n\nFor more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).\n\nNote that you'll typically want to use [`extend-exclude`](#extend-exclude) to modify the excluded paths.",
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    'explicit-preview-rules': {
      description:
        'Whether to require exact codes to select preview rules. When enabled, preview rules will not be selected by prefixes — the full code of each preview rule will be required to enable the rule.',
      deprecated: true,
      type: ['boolean', 'null'],
    },
    extend: {
      description:
        'A path to a local `pyproject.toml` file to merge into this configuration. User home directory and environment variables will be expanded.\n\nTo resolve the current `pyproject.toml` file, Ruff will first resolve this base configuration file, then merge in any properties defined in the current configuration file.',
      type: ['string', 'null'],
    },
    'extend-exclude': {
      description:
        'A list of file patterns to omit from formatting and linting, in addition to those specified by [`exclude`](#exclude).\n\nExclusions are based on globs, and can be either:\n\n- Single-path patterns, like `.mypy_cache` (to exclude any directory named `.mypy_cache` in the tree), `foo.py` (to exclude any file named `foo.py`), or `foo_*.py` (to exclude any file matching `foo_*.py` ). - Relative patterns, like `directory/foo.py` (to exclude that specific file) or `directory/*.py` (to exclude any Python files in `directory`). Note that these paths are relative to the project root (e.g., the directory containing your `pyproject.toml`).\n\nFor more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    'extend-fixable': {
      description:
        'A list of rule codes or prefixes to consider fixable, in addition to those specified by [`fixable`](#lint_fixable).',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        $ref: '#/definitions/RuleSelector',
      },
    },
    'extend-ignore': {
      description:
        'A list of rule codes or prefixes to ignore, in addition to those specified by `ignore`.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        $ref: '#/definitions/RuleSelector',
      },
    },
    'extend-include': {
      description:
        'A list of file patterns to include when linting, in addition to those specified by [`include`](#include).\n\nInclusion are based on globs, and should be single-path patterns, like `*.pyw`, to include any file with the `.pyw` extension.\n\nFor more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    'extend-per-file-ignores': {
      description:
        'A list of mappings from file pattern to rule codes or prefixes to exclude, in addition to any rules excluded by [`per-file-ignores`](#lint_per-file-ignores).',
      deprecated: true,
      type: ['object', 'null'],
      additionalProperties: {
        type: 'array',
        items: {
          $ref: '#/definitions/RuleSelector',
        },
      },
    },
    'extend-safe-fixes': {
      description:
        'A list of rule codes or prefixes for which unsafe fixes should be considered safe.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        $ref: '#/definitions/RuleSelector',
      },
    },
    'extend-select': {
      description:
        'A list of rule codes or prefixes to enable, in addition to those specified by [`select`](#lint_select).',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        $ref: '#/definitions/RuleSelector',
      },
    },
    'extend-unfixable': {
      description:
        'A list of rule codes or prefixes to consider non-auto-fixable, in addition to those specified by [`unfixable`](#lint_unfixable).',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        $ref: '#/definitions/RuleSelector',
      },
    },
    'extend-unsafe-fixes': {
      description:
        'A list of rule codes or prefixes for which safe fixes should be considered unsafe.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        $ref: '#/definitions/RuleSelector',
      },
    },
    external: {
      description:
        'A list of rule codes or prefixes that are unsupported by Ruff, but should be preserved when (e.g.) validating `# noqa` directives. Useful for retaining `# noqa` directives that cover plugins not yet implemented by Ruff.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    fix: {
      description:
        'Enable fix behavior by-default when running `ruff` (overridden by the `--fix` and `--no-fix` command-line flags). Only includes automatic fixes unless `--unsafe-fixes` is provided.',
      type: ['boolean', 'null'],
    },
    'fix-only': {
      description:
        'Like [`fix`](#fix), but disables reporting on leftover violation. Implies [`fix`](#fix).',
      type: ['boolean', 'null'],
    },
    fixable: {
      description:
        'A list of rule codes or prefixes to consider fixable. By default, all rules are considered fixable.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        $ref: '#/definitions/RuleSelector',
      },
    },
    'flake8-annotations': {
      description: 'Options for the `flake8-annotations` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8AnnotationsOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-bandit': {
      description: 'Options for the `flake8-bandit` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8BanditOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-boolean-trap': {
      description: 'Options for the `flake8-boolean-trap` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8BooleanTrapOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-bugbear': {
      description: 'Options for the `flake8-bugbear` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8BugbearOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-builtins': {
      description: 'Options for the `flake8-builtins` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8BuiltinsOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-comprehensions': {
      description: 'Options for the `flake8-comprehensions` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8ComprehensionsOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-copyright': {
      description: 'Options for the `flake8-copyright` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8CopyrightOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-errmsg': {
      description: 'Options for the `flake8-errmsg` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8ErrMsgOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-gettext': {
      description: 'Options for the `flake8-gettext` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8GetTextOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-implicit-str-concat': {
      description: 'Options for the `flake8-implicit-str-concat` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8ImplicitStrConcatOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-import-conventions': {
      description: 'Options for the `flake8-import-conventions` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8ImportConventionsOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-pytest-style': {
      description: 'Options for the `flake8-pytest-style` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8PytestStyleOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-quotes': {
      description: 'Options for the `flake8-quotes` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8QuotesOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-self': {
      description: 'Options for the `flake8_self` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8SelfOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-tidy-imports': {
      description: 'Options for the `flake8-tidy-imports` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8TidyImportsOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-type-checking': {
      description: 'Options for the `flake8-type-checking` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8TypeCheckingOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'flake8-unused-arguments': {
      description: 'Options for the `flake8-unused-arguments` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Flake8UnusedArgumentsOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'force-exclude': {
      description:
        "Whether to enforce [`exclude`](#exclude) and [`extend-exclude`](#extend-exclude) patterns, even for paths that are passed to Ruff explicitly. Typically, Ruff will lint any paths passed in directly, even if they would typically be excluded. Setting `force-exclude = true` will cause Ruff to respect these exclusions unequivocally.\n\nThis is useful for [`pre-commit`](https://pre-commit.com/), which explicitly passes all changed files to the [`ruff-pre-commit`](https://github.com/astral-sh/ruff-pre-commit) plugin, regardless of whether they're marked as excluded by Ruff's own settings.",
      type: ['boolean', 'null'],
    },
    format: {
      description: 'Options to configure code formatting.',
      anyOf: [
        {
          $ref: '#/definitions/FormatOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    ignore: {
      description:
        'A list of rule codes or prefixes to ignore. Prefixes can specify exact rules (like `F841`), entire categories (like `F`), or anything in between.\n\nWhen breaking ties between enabled and disabled rules (via `select` and `ignore`, respectively), more specific prefixes override less specific prefixes.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        $ref: '#/definitions/RuleSelector',
      },
    },
    'ignore-init-module-imports': {
      description:
        "Avoid automatically removing unused imports in `__init__.py` files. Such imports will still be flagged, but with a dedicated message suggesting that the import is either added to the module's `__all__` symbol, or re-exported with a redundant alias (e.g., `import os as os`).\n\nThis option is enabled by default, but you can opt-in to removal of imports via an unsafe fix.",
      deprecated: true,
      type: ['boolean', 'null'],
    },
    include: {
      description:
        'A list of file patterns to include when linting.\n\nInclusion are based on globs, and should be single-path patterns, like `*.pyw`, to include any file with the `.pyw` extension. `pyproject.toml` is included here not for configuration but because we lint whether e.g. the `[project]` matches the schema.\n\nNotebook files (`.ipynb` extension) are included by default on Ruff 0.6.0+.\n\nFor more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    'indent-width': {
      description:
        'The number of spaces per indentation level (tab).\n\nUsed by the formatter and when enforcing long-line violations (like `E501`) to determine the visual width of a tab.\n\nThis option changes the number of spaces the formatter inserts when using soft-tabs (`indent-style = space`).\n\nPEP 8 recommends using 4 spaces per [indentation level](https://peps.python.org/pep-0008/#indentation).',
      anyOf: [
        {
          $ref: '#/definitions/IndentWidth',
        },
        {
          type: 'null',
        },
      ],
    },
    isort: {
      description: 'Options for the `isort` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/IsortOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'line-length': {
      description:
        "The line length to use when enforcing long-lines violations (like `E501`) and at which `isort` and the formatter prefers to wrap lines.\n\nThe length is determined by the number of characters per line, except for lines containing East Asian characters or emojis. For these lines, the [unicode width](https://unicode.org/reports/tr11/) of each character is added up to determine the length.\n\nThe value must be greater than `0` and less than or equal to `320`.\n\nNote: While the formatter will attempt to format lines such that they remain within the `line-length`, it isn't a hard upper bound, and formatted lines may exceed the `line-length`.\n\nSee [`pycodestyle.max-line-length`](#lint_pycodestyle_max-line-length) to configure different lengths for `E501` and the formatter.",
      anyOf: [
        {
          $ref: '#/definitions/LineLength',
        },
        {
          type: 'null',
        },
      ],
    },
    lint: {
      anyOf: [
        {
          $ref: '#/definitions/LintOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'logger-objects': {
      description:
        'A list of objects that should be treated equivalently to a `logging.Logger` object.\n\nThis is useful for ensuring proper diagnostics (e.g., to identify `logging` deprecations and other best-practices) for projects that re-export a `logging.Logger` object from a common module.\n\nFor example, if you have a module `logging_setup.py` with the following contents: ```python import logging\n\nlogger = logging.getLogger(__name__) ```\n\nAdding `"logging_setup.logger"` to `logger-objects` will ensure that `logging_setup.logger` is treated as a `logging.Logger` object when imported from other modules (e.g., `from logging_setup import logger`).',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    mccabe: {
      description: 'Options for the `mccabe` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/McCabeOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'namespace-packages': {
      description:
        'Mark the specified directories as namespace packages. For the purpose of module resolution, Ruff will treat those directories and all their subdirectories as if they contained an `__init__.py` file.',
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    'output-format': {
      description:
        'The style in which violation messages should be formatted: `"full"` (default) (shows source), `"concise"`, `"grouped"` (group messages by file), `"json"` (machine-readable), `"junit"` (machine-readable XML), `"github"` (GitHub Actions annotations), `"gitlab"` (GitLab CI code quality report), `"pylint"` (Pylint text format) or `"azure"` (Azure Pipeline logging commands).',
      anyOf: [
        {
          $ref: '#/definitions/OutputFormat',
        },
        {
          type: 'null',
        },
      ],
    },
    'pep8-naming': {
      description: 'Options for the `pep8-naming` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/Pep8NamingOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'per-file-ignores': {
      description:
        "A list of mappings from file pattern to rule codes or prefixes to exclude, when considering any matching files. An initial '!' negates the file pattern.",
      deprecated: true,
      type: ['object', 'null'],
      additionalProperties: {
        type: 'array',
        items: {
          $ref: '#/definitions/RuleSelector',
        },
      },
    },
    preview: {
      description:
        'Whether to enable preview mode. When preview mode is enabled, Ruff will use unstable rules, fixes, and formatting.',
      type: ['boolean', 'null'],
    },
    pycodestyle: {
      description: 'Options for the `pycodestyle` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/PycodestyleOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    pydocstyle: {
      description: 'Options for the `pydocstyle` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/PydocstyleOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    pyflakes: {
      description: 'Options for the `pyflakes` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/PyflakesOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    pylint: {
      description: 'Options for the `pylint` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/PylintOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    pyupgrade: {
      description: 'Options for the `pyupgrade` plugin.',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/PyUpgradeOptions',
        },
        {
          type: 'null',
        },
      ],
    },
    'required-version': {
      description:
        'Enforce a requirement on the version of Ruff, to enforce at runtime. If the version of Ruff does not meet the requirement, Ruff will exit with an error.\n\nUseful for unifying results across many environments, e.g., with a `pyproject.toml` file.\n\nAccepts a [PEP 440](https://peps.python.org/pep-0440/) specifier, like `==0.3.1` or `>=0.3.1`.',
      anyOf: [
        {
          $ref: '#/definitions/RequiredVersion',
        },
        {
          type: 'null',
        },
      ],
    },
    'respect-gitignore': {
      description:
        'Whether to automatically exclude files that are ignored by `.ignore`, `.gitignore`, `.git/info/exclude`, and global `gitignore` files. Enabled by default.',
      type: ['boolean', 'null'],
    },
    select: {
      description:
        'A list of rule codes or prefixes to enable. Prefixes can specify exact rules (like `F841`), entire categories (like `F`), or anything in between.\n\nWhen breaking ties between enabled and disabled rules (via `select` and `ignore`, respectively), more specific prefixes override less specific prefixes.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        $ref: '#/definitions/RuleSelector',
      },
    },
    'show-fixes': {
      description:
        'Whether to show an enumeration of all fixed lint violations (overridden by the `--show-fixes` command-line flag).',
      type: ['boolean', 'null'],
    },
    src: {
      description:
        'The directories to consider when resolving first- vs. third-party imports.\n\nWhen omitted, the `src` directory will typically default to including both:\n\n1. The directory containing the nearest `pyproject.toml`, `ruff.toml`, or `.ruff.toml` file (the "project root"). 2. The `"src"` subdirectory of the project root.\n\nThese defaults ensure that uv supports both flat layouts and `src` layouts out-of-the-box. (If a configuration file is explicitly provided (e.g., via the `--config` command-line flag), the current working directory will be considered the project root.)\n\nAs an example, consider an alternative project structure, like:\n\n```text my_project ├── pyproject.toml └── lib └── my_package ├── __init__.py ├── foo.py └── bar.py ```\n\nIn this case, the `./lib` directory should be included in the `src` option (e.g., `src = ["lib"]`), such that when resolving imports, `my_package.foo` is considered first-party.\n\nThis field supports globs. For example, if you have a series of Python packages in a `python_modules` directory, `src = ["python_modules/*"]` would expand to incorporate all packages in that directory. User home directory and environment variables will also be expanded.',
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    'tab-size': {
      description:
        'The number of spaces a tab is equal to when enforcing long-line violations (like `E501`) or formatting code with the formatter.\n\nThis option changes the number of spaces inserted by the formatter when using soft-tabs (`indent-style = space`).',
      deprecated: true,
      anyOf: [
        {
          $ref: '#/definitions/IndentWidth',
        },
        {
          type: 'null',
        },
      ],
    },
    'target-version': {
      description:
        'The minimum Python version to target, e.g., when considering automatic code upgrades, like rewriting type annotations. Ruff will not propose changes using features that are not available in the given version.\n\nFor example, to represent supporting Python >=3.10 or ==3.10 specify `target-version = "py310"`.\n\nIf you\'re already using a `pyproject.toml` file, we recommend `project.requires-python` instead, as it\'s based on Python packaging standards, and will be respected by other tools. For example, Ruff treats the following as identical to `target-version = "py38"`:\n\n```toml [project] requires-python = ">=3.8" ```\n\nIf both are specified, `target-version` takes precedence over `requires-python`.\n\nNote that a stub file can [sometimes make use of a typing feature](https://typing.readthedocs.io/en/latest/spec/distributing.html#syntax) before it is available at runtime, as long as the stub does not make use of new *syntax*. For example, a type checker will understand `int | str` in a stub as being a `Union` type annotation, even if the type checker is run using Python 3.9, despite the fact that the `|` operator can only be used to create union types at runtime on Python 3.10+. As such, Ruff will often recommend newer features in a stub file than it would for an equivalent runtime file with the same target version.',
      anyOf: [
        {
          $ref: '#/definitions/PythonVersion',
        },
        {
          type: 'null',
        },
      ],
    },
    'task-tags': {
      description:
        'A list of task tags to recognize (e.g., "TODO", "FIXME", "XXX").\n\nComments starting with these tags will be ignored by commented-out code detection (`ERA`), and skipped by line-length rules (`E501`) if [`ignore-overlong-task-comments`](#lint_pycodestyle_ignore-overlong-task-comments) is set to `true`.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    'typing-modules': {
      description:
        'A list of modules whose exports should be treated equivalently to members of the `typing` module.\n\nThis is useful for ensuring proper type annotation inference for projects that re-export `typing` and `typing_extensions` members from a compatibility module. If omitted, any members imported from modules apart from `typing` and `typing_extensions` will be treated as ordinary Python objects.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        type: 'string',
      },
    },
    unfixable: {
      description: 'A list of rule codes or prefixes to consider non-fixable.',
      deprecated: true,
      type: ['array', 'null'],
      items: {
        $ref: '#/definitions/RuleSelector',
      },
    },
    'unsafe-fixes': {
      description:
        'Enable application of unsafe fixes. If excluded, a hint will be displayed when unsafe fixes are available. If set to false, the hint will be hidden.',
      type: ['boolean', 'null'],
    },
  },
  additionalProperties: false,
  definitions: {
    ApiBan: {
      type: 'object',
      required: ['msg'],
      properties: {
        msg: {
          description: 'The message to display when the API is used.',
          type: 'string',
        },
      },
      additionalProperties: false,
    },
    BannedAliases: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ConstantType: {
      type: 'string',
      enum: ['bytes', 'complex', 'float', 'int', 'str'],
    },
    Convention: {
      oneOf: [
        {
          description: 'Use Google-style docstrings.',
          type: 'string',
          enum: ['google'],
        },
        {
          description: 'Use NumPy-style docstrings.',
          type: 'string',
          enum: ['numpy'],
        },
        {
          description: 'Use PEP257-style docstrings.',
          type: 'string',
          enum: ['pep257'],
        },
      ],
    },
    DocstringCodeLineWidth: {
      anyOf: [
        {
          description: 'Wrap docstring code examples at a fixed line width.',
          allOf: [
            {
              $ref: '#/definitions/LineWidth',
            },
          ],
        },
        {
          description:
            'Respect the line length limit setting for the surrounding Python code.',
          allOf: [
            {
              $ref: '#/definitions/Dynamic',
            },
          ],
        },
      ],
    },
    Dynamic: {
      type: 'string',
      const: 'dynamic',
    },
    Flake8AnnotationsOptions: {
      type: 'object',
      properties: {
        'allow-star-arg-any': {
          description:
            'Whether to suppress `ANN401` for dynamically typed `*args` and `**kwargs` arguments.',
          type: ['boolean', 'null'],
        },
        'ignore-fully-untyped': {
          description:
            "Whether to suppress `ANN*` rules for any declaration that hasn't been typed at all. This makes it easier to gradually add types to a codebase.",
          type: ['boolean', 'null'],
        },
        'mypy-init-return': {
          description:
            'Whether to allow the omission of a return type hint for `__init__` if at least one argument is annotated.',
          type: ['boolean', 'null'],
        },
        'suppress-dummy-args': {
          description:
            'Whether to suppress `ANN000`-level violations for arguments matching the "dummy" variable regex (like `_`).',
          type: ['boolean', 'null'],
        },
        'suppress-none-returning': {
          description:
            'Whether to suppress `ANN200`-level violations for functions that meet either of the following criteria:\n\n- Contain no `return` statement. - Explicit `return` statement(s) all return `None` (explicitly or implicitly).',
          type: ['boolean', 'null'],
        },
      },
      additionalProperties: false,
    },
    Flake8BanditOptions: {
      type: 'object',
      properties: {
        'check-typed-exception': {
          description:
            'Whether to disallow `try`-`except`-`pass` (`S110`) for specific exception types. By default, `try`-`except`-`pass` is only disallowed for `Exception` and `BaseException`.',
          type: ['boolean', 'null'],
        },
        'hardcoded-tmp-directory': {
          description: 'A list of directories to consider temporary.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'hardcoded-tmp-directory-extend': {
          description:
            'A list of directories to consider temporary, in addition to those specified by [`hardcoded-tmp-directory`](#lint_flake8-bandit_hardcoded-tmp-directory).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    Flake8BooleanTrapOptions: {
      type: 'object',
      properties: {
        'extend-allowed-calls': {
          description:
            'Additional callable functions with which to allow boolean traps.\n\nExpects to receive a list of fully-qualified names (e.g., `pydantic.Field`, rather than `Field`).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    Flake8BugbearOptions: {
      type: 'object',
      properties: {
        'extend-immutable-calls': {
          description:
            'Additional callable functions to consider "immutable" when evaluating, e.g., the `function-call-in-default-argument` rule (`B008`) or `function-call-in-dataclass-defaults` rule (`RUF009`).\n\nExpects to receive a list of fully-qualified names (e.g., `fastapi.Query`, rather than `Query`).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    Flake8BuiltinsOptions: {
      type: 'object',
      properties: {
        'builtins-allowed-modules': {
          description: 'List of builtin module names to allow.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'builtins-ignorelist': {
          description: 'Ignore list of builtins.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    Flake8ComprehensionsOptions: {
      type: 'object',
      properties: {
        'allow-dict-calls-with-keyword-arguments': {
          description:
            'Allow `dict` calls that make use of keyword arguments (e.g., `dict(a=1, b=2)`).',
          type: ['boolean', 'null'],
        },
      },
      additionalProperties: false,
    },
    Flake8CopyrightOptions: {
      type: 'object',
      properties: {
        author: {
          description:
            'Author to enforce within the copyright notice. If provided, the author must be present immediately following the copyright notice.',
          type: ['string', 'null'],
        },
        'min-file-size': {
          description:
            'A minimum file size (in bytes) required for a copyright notice to be enforced. By default, all files are validated.',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
        'notice-rgx': {
          description:
            'The regular expression used to match the copyright notice, compiled with the [`regex`](https://docs.rs/regex/latest/regex/) crate. Defaults to `(?i)Copyright\\s+((?:\\(C\\)|©)\\s+)?\\d{4}((-|,\\s)\\d{4})*`, which matches the following:\n\n- `Copyright 2023` - `Copyright (C) 2023` - `Copyright 2021-2023` - `Copyright (C) 2021-2023` - `Copyright (C) 2021, 2023`',
          type: ['string', 'null'],
        },
      },
      additionalProperties: false,
    },
    Flake8ErrMsgOptions: {
      type: 'object',
      properties: {
        'max-string-length': {
          description:
            'Maximum string length for string literals in exception messages.',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
      },
      additionalProperties: false,
    },
    Flake8GetTextOptions: {
      type: 'object',
      properties: {
        'extend-function-names': {
          description:
            'Additional function names to consider as internationalization calls, in addition to those included in [`function-names`](#lint_flake8-gettext_function-names).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'function-names': {
          description:
            'The function names to consider as internationalization calls.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    Flake8ImplicitStrConcatOptions: {
      type: 'object',
      properties: {
        'allow-multiline': {
          description:
            'Whether to allow implicit string concatenations for multiline strings. By default, implicit concatenations of multiline strings are allowed (but continuation lines, delimited with a backslash, are prohibited).\n\nSetting `allow-multiline = false` will automatically disable the `explicit-string-concatenation` (`ISC003`) rule. Otherwise, both implicit and explicit multiline string concatenations would be seen as violations, making it impossible to write a linter-compliant multiline string.',
          type: ['boolean', 'null'],
        },
      },
      additionalProperties: false,
    },
    Flake8ImportConventionsOptions: {
      type: 'object',
      properties: {
        aliases: {
          description:
            'The conventional aliases for imports. These aliases can be extended by the [`extend-aliases`](#lint_flake8-import-conventions_extend-aliases) option.',
          type: ['object', 'null'],
          additionalProperties: {
            type: 'string',
          },
        },
        'banned-aliases': {
          description: 'A mapping from module to its banned import aliases.',
          type: ['object', 'null'],
          additionalProperties: {
            $ref: '#/definitions/BannedAliases',
          },
        },
        'banned-from': {
          description:
            'A list of modules that should not be imported from using the `from ... import ...` syntax.\n\nFor example, given `banned-from = ["pandas"]`, `from pandas import DataFrame` would be disallowed, while `import pandas` would be allowed.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
          uniqueItems: true,
        },
        'extend-aliases': {
          description:
            'A mapping from module to conventional import alias. These aliases will be added to the [`aliases`](#lint_flake8-import-conventions_aliases) mapping.',
          type: ['object', 'null'],
          additionalProperties: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    Flake8PytestStyleOptions: {
      type: 'object',
      properties: {
        'fixture-parentheses': {
          description:
            'Boolean flag specifying whether `@pytest.fixture()` without parameters should have parentheses. If the option is set to `false` (the default), `@pytest.fixture` is valid and `@pytest.fixture()` is invalid. If set to `true`, `@pytest.fixture()` is valid and `@pytest.fixture` is invalid.',
          type: ['boolean', 'null'],
        },
        'mark-parentheses': {
          description:
            'Boolean flag specifying whether `@pytest.mark.foo()` without parameters should have parentheses. If the option is set to `false` (the default), `@pytest.mark.foo` is valid and `@pytest.mark.foo()` is invalid. If set to `true`, `@pytest.mark.foo()` is valid and `@pytest.mark.foo` is invalid.',
          type: ['boolean', 'null'],
        },
        'parametrize-names-type': {
          description:
            'Expected type for multiple argument names in `@pytest.mark.parametrize`. The following values are supported:\n\n- `csv` — a comma-separated list, e.g. `@pytest.mark.parametrize("name1,name2", ...)` - `tuple` (default) — e.g. `@pytest.mark.parametrize(("name1", "name2"), ...)` - `list` — e.g. `@pytest.mark.parametrize(["name1", "name2"], ...)`',
          anyOf: [
            {
              $ref: '#/definitions/ParametrizeNameType',
            },
            {
              type: 'null',
            },
          ],
        },
        'parametrize-values-row-type': {
          description:
            'Expected type for each row of values in `@pytest.mark.parametrize` in case of multiple parameters. The following values are supported:\n\n- `tuple` (default) — e.g. `@pytest.mark.parametrize(("name1", "name2"), [(1, 2), (3, 4)])` - `list` — e.g. `@pytest.mark.parametrize(("name1", "name2"), [[1, 2], [3, 4]])`',
          anyOf: [
            {
              $ref: '#/definitions/ParametrizeValuesRowType',
            },
            {
              type: 'null',
            },
          ],
        },
        'parametrize-values-type': {
          description:
            'Expected type for the list of values rows in `@pytest.mark.parametrize`. The following values are supported:\n\n- `tuple` — e.g. `@pytest.mark.parametrize("name", (1, 2, 3))` - `list` (default) — e.g. `@pytest.mark.parametrize("name", [1, 2, 3])`',
          anyOf: [
            {
              $ref: '#/definitions/ParametrizeValuesType',
            },
            {
              type: 'null',
            },
          ],
        },
        'raises-extend-require-match-for': {
          description:
            'List of additional exception names that require a match= parameter in a `pytest.raises()` call. This extends the default list of exceptions that require a match= parameter. This option is useful if you want to extend the default list of exceptions that require a match= parameter without having to specify the entire list. Note that this option does not remove any exceptions from the default list.\n\nSupports glob patterns. For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'raises-require-match-for': {
          description:
            'List of exception names that require a match= parameter in a `pytest.raises()` call.\n\nSupports glob patterns. For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    Flake8QuotesOptions: {
      type: 'object',
      properties: {
        'avoid-escape': {
          description:
            'Whether to avoid using single quotes if a string contains single quotes, or vice-versa with double quotes, as per [PEP 8](https://peps.python.org/pep-0008/#string-quotes). This minimizes the need to escape quotation marks within strings.',
          type: ['boolean', 'null'],
        },
        'docstring-quotes': {
          description:
            'Quote style to prefer for docstrings (either "single" or "double").\n\nWhen using the formatter, only "double" is compatible, as the formatter enforces double quotes for docstrings strings.',
          anyOf: [
            {
              $ref: '#/definitions/Quote',
            },
            {
              type: 'null',
            },
          ],
        },
        'inline-quotes': {
          description:
            'Quote style to prefer for inline strings (either "single" or "double").\n\nWhen using the formatter, ensure that [`format.quote-style`](#format_quote-style) is set to the same preferred quote style.',
          anyOf: [
            {
              $ref: '#/definitions/Quote',
            },
            {
              type: 'null',
            },
          ],
        },
        'multiline-quotes': {
          description:
            'Quote style to prefer for multiline strings (either "single" or "double").\n\nWhen using the formatter, only "double" is compatible, as the formatter enforces double quotes for multiline strings.',
          anyOf: [
            {
              $ref: '#/definitions/Quote',
            },
            {
              type: 'null',
            },
          ],
        },
      },
      additionalProperties: false,
    },
    Flake8SelfOptions: {
      type: 'object',
      properties: {
        'extend-ignore-names': {
          description:
            'Additional names to ignore when considering `flake8-self` violations, in addition to those included in [`ignore-names`](#lint_flake8-self_ignore-names).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'ignore-names': {
          description:
            'A list of names to ignore when considering `flake8-self` violations.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    Flake8TidyImportsOptions: {
      type: 'object',
      properties: {
        'ban-relative-imports': {
          description:
            'Whether to ban all relative imports (`"all"`), or only those imports that extend into the parent module or beyond (`"parents"`).',
          anyOf: [
            {
              $ref: '#/definitions/Strictness',
            },
            {
              type: 'null',
            },
          ],
        },
        'banned-api': {
          description:
            'Specific modules or module members that may not be imported or accessed. Note that this rule is only meant to flag accidental uses, and can be circumvented via `eval` or `importlib`.',
          type: ['object', 'null'],
          additionalProperties: {
            $ref: '#/definitions/ApiBan',
          },
        },
        'banned-module-level-imports': {
          description:
            'List of specific modules that may not be imported at module level, and should instead be imported lazily (e.g., within a function definition, or an `if TYPE_CHECKING:` block, or some other nested context).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    Flake8TypeCheckingOptions: {
      type: 'object',
      properties: {
        'exempt-modules': {
          description:
            'Exempt certain modules from needing to be moved into type-checking blocks.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'quote-annotations': {
          description:
            'Whether to add quotes around type annotations, if doing so would allow the corresponding import to be moved into a type-checking block.\n\nFor example, in the following, Python requires that `Sequence` be available at runtime, despite the fact that it\'s only used in a type annotation:\n\n```python from collections.abc import Sequence\n\ndef func(value: Sequence[int]) -> None: ... ```\n\nIn other words, moving `from collections.abc import Sequence` into an `if TYPE_CHECKING:` block above would cause a runtime error, as the type would no longer be available at runtime.\n\nBy default, Ruff will respect such runtime semantics and avoid moving the import to prevent such runtime errors.\n\nSetting `quote-annotations` to `true` will instruct Ruff to add quotes around the annotation (e.g., `"Sequence[int]"`), which in turn enables Ruff to move the import into an `if TYPE_CHECKING:` block, like so:\n\n```python from typing import TYPE_CHECKING\n\nif TYPE_CHECKING: from collections.abc import Sequence\n\ndef func(value: "Sequence[int]") -> None: ... ```\n\nNote that this setting has no effect when `from __future__ import annotations` is present, as `__future__` annotations are always treated equivalently to quoted annotations.',
          type: ['boolean', 'null'],
        },
        'runtime-evaluated-base-classes': {
          description:
            "Exempt classes that list any of the enumerated classes as a base class from needing to be moved into type-checking blocks.\n\nCommon examples include Pydantic's `pydantic.BaseModel` and SQLAlchemy's `sqlalchemy.orm.DeclarativeBase`, but can also support user-defined classes that inherit from those base classes. For example, if you define a common `DeclarativeBase` subclass that's used throughout your project (e.g., `class Base(DeclarativeBase) ...` in `base.py`), you can add it to this list (`runtime-evaluated-base-classes = [\"base.Base\"]`) to exempt models from being moved into type-checking blocks.",
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'runtime-evaluated-decorators': {
          description:
            "Exempt classes and functions decorated with any of the enumerated decorators from being moved into type-checking blocks.\n\nCommon examples include Pydantic's `@pydantic.validate_call` decorator (for functions) and attrs' `@attrs.define` decorator (for classes).",
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        strict: {
          description:
            "Enforce `TC001`, `TC002`, and `TC003` rules even when valid runtime imports are present for the same module.\n\nSee flake8-type-checking's [strict](https://github.com/snok/flake8-type-checking#strict) option.",
          type: ['boolean', 'null'],
        },
      },
      additionalProperties: false,
    },
    Flake8UnusedArgumentsOptions: {
      type: 'object',
      properties: {
        'ignore-variadic-names': {
          description:
            'Whether to allow unused variadic arguments, like `*args` and `**kwargs`.',
          type: ['boolean', 'null'],
        },
      },
      additionalProperties: false,
    },
    FormatOptions: {
      description: 'Configures the way Ruff formats your code.',
      type: 'object',
      properties: {
        'docstring-code-format': {
          description:
            'Whether to format code snippets in docstrings.\n\nWhen this is enabled, Python code examples within docstrings are automatically reformatted.\n\nFor example, when this is enabled, the following code:\n\n```python def f(x): """ Something about `f`. And an example in doctest format:\n\n>>> f(  x  )\n\nMarkdown is also supported:\n\n```py f(  x  ) ```\n\nAs are reStructuredText literal blocks::\n\nf(  x  )\n\nAnd reStructuredText code blocks:\n\n.. code-block:: python\n\nf(  x  ) """ pass ```\n\n... will be reformatted (assuming the rest of the options are set to their defaults) as:\n\n```python def f(x): """ Something about `f`. And an example in doctest format:\n\n>>> f(x)\n\nMarkdown is also supported:\n\n```py f(x) ```\n\nAs are reStructuredText literal blocks::\n\nf(x)\n\nAnd reStructuredText code blocks:\n\n.. code-block:: python\n\nf(x) """ pass ```\n\nIf a code snippet in a docstring contains invalid Python code or if the formatter would otherwise write invalid Python code, then the code example is ignored by the formatter and kept as-is.\n\nCurrently, doctest, Markdown, reStructuredText literal blocks, and reStructuredText code blocks are all supported and automatically recognized. In the case of unlabeled fenced code blocks in Markdown and reStructuredText literal blocks, the contents are assumed to be Python and reformatted. As with any other format, if the contents aren\'t valid Python, then the block is left untouched automatically.',
          type: ['boolean', 'null'],
        },
        'docstring-code-line-length': {
          description:
            'Set the line length used when formatting code snippets in docstrings.\n\nThis only has an effect when the `docstring-code-format` setting is enabled.\n\nThe default value for this setting is `"dynamic"`, which has the effect of ensuring that any reformatted code examples in docstrings adhere to the global line length configuration that is used for the surrounding Python code. The point of this setting is that it takes the indentation of the docstring into account when reformatting code examples.\n\nAlternatively, this can be set to a fixed integer, which will result in the same line length limit being applied to all reformatted code examples in docstrings. When set to a fixed integer, the indent of the docstring is not taken into account. That is, this may result in lines in the reformatted code example that exceed the globally configured line length limit.\n\nFor example, when this is set to `20` and [`docstring-code-format`](#docstring-code-format) is enabled, then this code:\n\n```python def f(x): \'\'\' Something about `f`. And an example:\n\n.. code-block:: python\n\nfoo, bar, quux = this_is_a_long_line(lion, hippo, lemur, bear) \'\'\' pass ```\n\n... will be reformatted (assuming the rest of the options are set to their defaults) as:\n\n```python def f(x): """ Something about `f`. And an example:\n\n.. code-block:: python\n\n( foo, bar, quux, ) = this_is_a_long_line( lion, hippo, lemur, bear, ) """ pass ```',
          anyOf: [
            {
              $ref: '#/definitions/DocstringCodeLineWidth',
            },
            {
              type: 'null',
            },
          ],
        },
        exclude: {
          description:
            'A list of file patterns to exclude from formatting in addition to the files excluded globally (see [`exclude`](#exclude), and [`extend-exclude`](#extend-exclude)).\n\nExclusions are based on globs, and can be either:\n\n- Single-path patterns, like `.mypy_cache` (to exclude any directory named `.mypy_cache` in the tree), `foo.py` (to exclude any file named `foo.py`), or `foo_*.py` (to exclude any file matching `foo_*.py` ). - Relative patterns, like `directory/foo.py` (to exclude that specific file) or `directory/*.py` (to exclude any Python files in `directory`). Note that these paths are relative to the project root (e.g., the directory containing your `pyproject.toml`).\n\nFor more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'indent-style': {
          description:
            'Whether to use spaces or tabs for indentation.\n\n`indent-style = "space"` (default):\n\n```python def f(): print("Hello") #  Spaces indent the `print` statement. ```\n\n`indent-style = "tab"`:\n\n```python def f(): print("Hello") #  A tab `\\t` indents the `print` statement. ```\n\nPEP 8 recommends using spaces for [indentation](https://peps.python.org/pep-0008/#indentation). We care about accessibility; if you do not need tabs for accessibility, we do not recommend you use them.\n\nSee [`indent-width`](#indent-width) to configure the number of spaces per indentation and the tab width.',
          anyOf: [
            {
              $ref: '#/definitions/IndentStyle',
            },
            {
              type: 'null',
            },
          ],
        },
        'line-ending': {
          description:
            'The character Ruff uses at the end of a line.\n\n* `auto`: The newline style is detected automatically on a file per file basis. Files with mixed line endings will be converted to the first detected line ending. Defaults to `\\n` for files that contain no line endings. * `lf`: Line endings will be converted to `\\n`. The default line ending on Unix. * `cr-lf`: Line endings will be converted to `\\r\\n`. The default line ending on Windows. * `native`: Line endings will be converted to `\\n` on Unix and `\\r\\n` on Windows.',
          anyOf: [
            {
              $ref: '#/definitions/LineEnding',
            },
            {
              type: 'null',
            },
          ],
        },
        preview: {
          description:
            'Whether to enable the unstable preview style formatting.',
          type: ['boolean', 'null'],
        },
        'quote-style': {
          description:
            'Configures the preferred quote character for strings. The recommended options are\n\n* `double` (default): Use double quotes `"` * `single`: Use single quotes `\'`\n\nIn compliance with [PEP 8](https://peps.python.org/pep-0008/) and [PEP 257](https://peps.python.org/pep-0257/), Ruff prefers double quotes for triple quoted strings and docstrings even when using `quote-style = "single"`.\n\nRuff deviates from using the configured quotes if doing so prevents the need for escaping quote characters inside the string:\n\n```python a = "a string without any quotes" b = "It\'s monday morning" ```\n\nRuff will change the quotes of the string assigned to `a` to single quotes when using `quote-style = "single"`. However, Ruff uses double quotes for the string assigned to `b` because using single quotes would require escaping the `\'`, which leads to the less readable code: `\'It\\\'s monday morning\'`.\n\nIn addition, Ruff supports the quote style `preserve` for projects that already use a mixture of single and double quotes and can\'t migrate to the `double` or `single` style. The quote style `preserve` leaves the quotes of all strings unchanged.',
          anyOf: [
            {
              $ref: '#/definitions/QuoteStyle',
            },
            {
              type: 'null',
            },
          ],
        },
        'skip-magic-trailing-comma': {
          description:
            "Ruff uses existing trailing commas as an indication that short lines should be left separate. If this option is set to `true`, the magic trailing comma is ignored.\n\nFor example, Ruff leaves the arguments separate even though collapsing the arguments to a single line doesn't exceed the line length if `skip-magic-trailing-comma = false`:\n\n```python # The arguments remain on separate lines because of the trailing comma after `b` def test( a, b, ): pass ```\n\nSetting `skip-magic-trailing-comma = true` changes the formatting to:\n\n```python # The arguments remain on separate lines because of the trailing comma after `b` def test(a, b): pass ```",
          type: ['boolean', 'null'],
        },
      },
      additionalProperties: false,
    },
    ImportSection: {
      anyOf: [
        {
          $ref: '#/definitions/ImportType',
        },
        {
          type: 'string',
        },
      ],
    },
    ImportType: {
      type: 'string',
      enum: [
        'future',
        'standard-library',
        'third-party',
        'first-party',
        'local-folder',
      ],
    },
    IndentStyle: {
      oneOf: [
        {
          description: 'Use tabs to indent code.',
          type: 'string',
          enum: ['tab'],
        },
        {
          description: 'Use [`IndentWidth`] spaces to indent code.',
          type: 'string',
          enum: ['space'],
        },
      ],
    },
    IndentWidth: {
      description: 'The size of a tab.',
      type: 'integer',
      format: 'uint8',
      minimum: 1.0,
    },
    IsortOptions: {
      type: 'object',
      properties: {
        'case-sensitive': {
          description: 'Sort imports taking into account case sensitivity.',
          type: ['boolean', 'null'],
        },
        classes: {
          description:
            'An override list of tokens to always recognize as a Class for [`order-by-type`](#lint_isort_order-by-type) regardless of casing.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'combine-as-imports': {
          description:
            "Combines as imports on the same line. See isort's [`combine-as-imports`](https://pycqa.github.io/isort/docs/configuration/options.html#combine-as-imports) option.",
          type: ['boolean', 'null'],
        },
        constants: {
          description:
            'An override list of tokens to always recognize as a CONSTANT for [`order-by-type`](#lint_isort_order-by-type) regardless of casing.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'default-section': {
          description:
            "Define a default section for any imports that don't fit into the specified [`section-order`](#lint_isort_section-order).",
          anyOf: [
            {
              $ref: '#/definitions/ImportSection',
            },
            {
              type: 'null',
            },
          ],
        },
        'detect-same-package': {
          description:
            'Whether to automatically mark imports from within the same package as first-party. For example, when `detect-same-package = true`, then when analyzing files within the `foo` package, any imports from within the `foo` package will be considered first-party.\n\nThis heuristic is often unnecessary when `src` is configured to detect all first-party sources; however, if `src` is _not_ configured, this heuristic can be useful to detect first-party imports from _within_ (but not _across_) first-party packages.',
          type: ['boolean', 'null'],
        },
        'extra-standard-library': {
          description:
            'A list of modules to consider standard-library, in addition to those known to Ruff in advance.\n\nSupports glob patterns. For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'force-single-line': {
          description: 'Forces all from imports to appear on their own line.',
          type: ['boolean', 'null'],
        },
        'force-sort-within-sections': {
          description:
            "Don't sort straight-style imports (like `import sys`) before from-style imports (like `from itertools import groupby`). Instead, sort the imports by module, independent of import style.",
          type: ['boolean', 'null'],
        },
        'force-to-top': {
          description:
            'Force specific imports to the top of their appropriate section.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'force-wrap-aliases': {
          description:
            "Force `import from` statements with multiple members and at least one alias (e.g., `import A as B`) to wrap such that every line contains exactly one member. For example, this formatting would be retained, rather than condensing to a single line:\n\n```python from .utils import ( test_directory as test_directory, test_id as test_id ) ```\n\nNote that this setting is only effective when combined with `combine-as-imports = true`. When [`combine-as-imports`](#lint_isort_combine-as-imports) isn't enabled, every aliased `import from` will be given its own line, in which case, wrapping is not necessary.\n\nWhen using the formatter, ensure that [`format.skip-magic-trailing-comma`](#format_skip-magic-trailing-comma) is set to `false` (default) when enabling `force-wrap-aliases` to avoid that the formatter collapses members if they all fit on a single line.",
          type: ['boolean', 'null'],
        },
        'forced-separate': {
          description:
            'A list of modules to separate into auxiliary block(s) of imports, in the order specified.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'from-first': {
          description:
            'Whether to place `import from` imports before straight imports when sorting.\n\nFor example, by default, imports will be sorted such that straight imports appear before `import from` imports, as in: ```python import os import sys from typing import List ```\n\nSetting `from-first = true` will instead sort such that `import from` imports appear before straight imports, as in: ```python from typing import List import os import sys ```',
          type: ['boolean', 'null'],
        },
        'known-first-party': {
          description:
            'A list of modules to consider first-party, regardless of whether they can be identified as such via introspection of the local filesystem.\n\nSupports glob patterns. For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'known-local-folder': {
          description:
            'A list of modules to consider being a local folder. Generally, this is reserved for relative imports (`from . import module`).\n\nSupports glob patterns. For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'known-third-party': {
          description:
            'A list of modules to consider third-party, regardless of whether they can be identified as such via introspection of the local filesystem.\n\nSupports glob patterns. For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'length-sort': {
          description:
            'Sort imports by their string length, such that shorter imports appear before longer imports. For example, by default, imports will be sorted alphabetically, as in: ```python import collections import os ```\n\nSetting `length-sort = true` will instead sort such that shorter imports appear before longer imports, as in: ```python import os import collections ```',
          type: ['boolean', 'null'],
        },
        'length-sort-straight': {
          description:
            "Sort straight imports by their string length. Similar to [`length-sort`](#lint_isort_length-sort), but applies only to straight imports and doesn't affect `from` imports.",
          type: ['boolean', 'null'],
        },
        'lines-after-imports': {
          description:
            'The number of blank lines to place after imports. Use `-1` for automatic determination.\n\nRuff uses at most one blank line after imports in typing stub files (files with `.pyi` extension) in accordance to the typing style recommendations ([source](https://typing.readthedocs.io/en/latest/source/stubs.html#blank-lines)).\n\nWhen using the formatter, only the values `-1`, `1`, and `2` are compatible because it enforces at least one empty and at most two empty lines after imports.',
          type: ['integer', 'null'],
          format: 'int',
        },
        'lines-between-types': {
          description:
            'The number of lines to place between "direct" and `import from` imports.\n\nWhen using the formatter, only the values `0` and `1` are compatible because it preserves up to one empty line after imports in nested blocks.',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
        'no-lines-before': {
          description:
            'A list of sections that should _not_ be delineated from the previous section via empty lines.',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/ImportSection',
          },
        },
        'no-sections': {
          description:
            'Put all imports into the same section bucket.\n\nFor example, rather than separating standard library and third-party imports, as in: ```python import os import sys\n\nimport numpy import pandas ```\n\nSetting `no-sections = true` will instead group all imports into a single section: ```python import numpy import os import pandas import sys ```',
          type: ['boolean', 'null'],
        },
        'order-by-type': {
          description:
            'Order imports by type, which is determined by case, in addition to alphabetically.',
          type: ['boolean', 'null'],
        },
        'relative-imports-order': {
          description:
            'Whether to place "closer" imports (fewer `.` characters, most local) before "further" imports (more `.` characters, least local), or vice versa.\n\nThe default ("furthest-to-closest") is equivalent to isort\'s [`reverse-relative`](https://pycqa.github.io/isort/docs/configuration/options.html#reverse-relative) default (`reverse-relative = false`); setting this to "closest-to-furthest" is equivalent to isort\'s `reverse-relative = true`.',
          anyOf: [
            {
              $ref: '#/definitions/RelativeImportsOrder',
            },
            {
              type: 'null',
            },
          ],
        },
        'required-imports': {
          description: 'Add the specified import line to all files.',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/NameImports',
          },
        },
        'section-order': {
          description:
            'Override in which order the sections should be output. Can be used to move custom sections.',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/ImportSection',
          },
        },
        sections: {
          description:
            'A list of mappings from section names to modules.\n\nBy default, imports are categorized according to their type (e.g., `future`, `third-party`, and so on). This setting allows you to group modules into custom sections, to augment or override the built-in sections.\n\nFor example, to group all testing utilities, you could create a `testing` section: ```toml testing = ["pytest", "hypothesis"] ```\n\nThe values in the list are treated as glob patterns. For example, to match all packages in the LangChain ecosystem (`langchain-core`, `langchain-openai`, etc.): ```toml langchain = ["langchain-*"] ```\n\nCustom sections should typically be inserted into the [`section-order`](#lint_isort_section-order) list to ensure that they\'re displayed as a standalone group and in the intended order, as in: ```toml section-order = [ "future", "standard-library", "third-party", "first-party", "local-folder", "testing" ] ```\n\nIf a custom section is omitted from [`section-order`](#lint_isort_section-order), imports in that section will be assigned to the [`default-section`](#lint_isort_default-section) (which defaults to `third-party`).',
          type: ['object', 'null'],
          additionalProperties: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        'single-line-exclusions': {
          description:
            'One or more modules to exclude from the single line rule.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'split-on-trailing-comma': {
          description:
            "If a comma is placed after the last member in a multi-line import, then the imports will never be folded into one line.\n\nSee isort's [`split-on-trailing-comma`](https://pycqa.github.io/isort/docs/configuration/options.html#split-on-trailing-comma) option.\n\nWhen using the formatter, ensure that [`format.skip-magic-trailing-comma`](#format_skip-magic-trailing-comma) is set to `false` (default) when enabling `split-on-trailing-comma` to avoid that the formatter removes the trailing commas.",
          type: ['boolean', 'null'],
        },
        variables: {
          description:
            'An override list of tokens to always recognize as a var for [`order-by-type`](#lint_isort_order-by-type) regardless of casing.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    LineEnding: {
      oneOf: [
        {
          description:
            'The newline style is detected automatically on a file per file basis. Files with mixed line endings will be converted to the first detected line ending. Defaults to [`LineEnding::Lf`] for a files that contain no line endings.',
          type: 'string',
          enum: ['auto'],
        },
        {
          description:
            'Line endings will be converted to `\\n` as is common on Unix.',
          type: 'string',
          enum: ['lf'],
        },
        {
          description:
            'Line endings will be converted to `\\r\\n` as is common on Windows.',
          type: 'string',
          enum: ['cr-lf'],
        },
        {
          description:
            'Line endings will be converted to `\\n` on Unix and `\\r\\n` on Windows.',
          type: 'string',
          enum: ['native'],
        },
      ],
    },
    LineLength: {
      description:
        'The length of a line of text that is considered too long.\n\nThe allowed range of values is 1..=320',
      type: 'integer',
      format: 'uint16',
      maximum: 320.0,
      minimum: 1.0,
    },
    LineWidth: {
      description:
        'The maximum visual width to which the formatter should try to limit a line.',
      type: 'integer',
      format: 'uint16',
      minimum: 1.0,
    },
    LintOptions: {
      description:
        'Configures how Ruff checks your code.\n\nOptions specified in the `lint` section take precedence over the deprecated top-level settings.',
      type: 'object',
      properties: {
        'allowed-confusables': {
          description:
            'A list of allowed "confusable" Unicode characters to ignore when enforcing `RUF001`, `RUF002`, and `RUF003`.',
          type: ['array', 'null'],
          items: {
            type: 'string',
            maxLength: 1,
            minLength: 1,
          },
        },
        'dummy-variable-rgx': {
          description:
            'A regular expression used to identify "dummy" variables, or those which should be ignored when enforcing (e.g.) unused-variable rules. The default expression matches `_`, `__`, and `_var`, but not `_var_`.',
          type: ['string', 'null'],
        },
        exclude: {
          description:
            'A list of file patterns to exclude from linting in addition to the files excluded globally (see [`exclude`](#exclude), and [`extend-exclude`](#extend-exclude)).\n\nExclusions are based on globs, and can be either:\n\n- Single-path patterns, like `.mypy_cache` (to exclude any directory named `.mypy_cache` in the tree), `foo.py` (to exclude any file named `foo.py`), or `foo_*.py` (to exclude any file matching `foo_*.py` ). - Relative patterns, like `directory/foo.py` (to exclude that specific file) or `directory/*.py` (to exclude any Python files in `directory`). Note that these paths are relative to the project root (e.g., the directory containing your `pyproject.toml`).\n\nFor more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'explicit-preview-rules': {
          description:
            'Whether to require exact codes to select preview rules. When enabled, preview rules will not be selected by prefixes — the full code of each preview rule will be required to enable the rule.',
          type: ['boolean', 'null'],
        },
        'extend-fixable': {
          description:
            'A list of rule codes or prefixes to consider fixable, in addition to those specified by [`fixable`](#lint_fixable).',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/RuleSelector',
          },
        },
        'extend-ignore': {
          description:
            'A list of rule codes or prefixes to ignore, in addition to those specified by `ignore`.',
          deprecated: true,
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/RuleSelector',
          },
        },
        'extend-per-file-ignores': {
          description:
            'A list of mappings from file pattern to rule codes or prefixes to exclude, in addition to any rules excluded by [`per-file-ignores`](#lint_per-file-ignores).',
          type: ['object', 'null'],
          additionalProperties: {
            type: 'array',
            items: {
              $ref: '#/definitions/RuleSelector',
            },
          },
        },
        'extend-safe-fixes': {
          description:
            'A list of rule codes or prefixes for which unsafe fixes should be considered safe.',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/RuleSelector',
          },
        },
        'extend-select': {
          description:
            'A list of rule codes or prefixes to enable, in addition to those specified by [`select`](#lint_select).',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/RuleSelector',
          },
        },
        'extend-unfixable': {
          description:
            'A list of rule codes or prefixes to consider non-auto-fixable, in addition to those specified by [`unfixable`](#lint_unfixable).',
          deprecated: true,
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/RuleSelector',
          },
        },
        'extend-unsafe-fixes': {
          description:
            'A list of rule codes or prefixes for which safe fixes should be considered unsafe.',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/RuleSelector',
          },
        },
        external: {
          description:
            'A list of rule codes or prefixes that are unsupported by Ruff, but should be preserved when (e.g.) validating `# noqa` directives. Useful for retaining `# noqa` directives that cover plugins not yet implemented by Ruff.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        fixable: {
          description:
            'A list of rule codes or prefixes to consider fixable. By default, all rules are considered fixable.',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/RuleSelector',
          },
        },
        'flake8-annotations': {
          description: 'Options for the `flake8-annotations` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8AnnotationsOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-bandit': {
          description: 'Options for the `flake8-bandit` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8BanditOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-boolean-trap': {
          description: 'Options for the `flake8-boolean-trap` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8BooleanTrapOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-bugbear': {
          description: 'Options for the `flake8-bugbear` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8BugbearOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-builtins': {
          description: 'Options for the `flake8-builtins` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8BuiltinsOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-comprehensions': {
          description: 'Options for the `flake8-comprehensions` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8ComprehensionsOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-copyright': {
          description: 'Options for the `flake8-copyright` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8CopyrightOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-errmsg': {
          description: 'Options for the `flake8-errmsg` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8ErrMsgOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-gettext': {
          description: 'Options for the `flake8-gettext` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8GetTextOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-implicit-str-concat': {
          description: 'Options for the `flake8-implicit-str-concat` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8ImplicitStrConcatOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-import-conventions': {
          description: 'Options for the `flake8-import-conventions` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8ImportConventionsOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-pytest-style': {
          description: 'Options for the `flake8-pytest-style` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8PytestStyleOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-quotes': {
          description: 'Options for the `flake8-quotes` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8QuotesOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-self': {
          description: 'Options for the `flake8_self` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8SelfOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-tidy-imports': {
          description: 'Options for the `flake8-tidy-imports` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8TidyImportsOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-type-checking': {
          description: 'Options for the `flake8-type-checking` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8TypeCheckingOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'flake8-unused-arguments': {
          description: 'Options for the `flake8-unused-arguments` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Flake8UnusedArgumentsOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        ignore: {
          description:
            'A list of rule codes or prefixes to ignore. Prefixes can specify exact rules (like `F841`), entire categories (like `F`), or anything in between.\n\nWhen breaking ties between enabled and disabled rules (via `select` and `ignore`, respectively), more specific prefixes override less specific prefixes.',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/RuleSelector',
          },
        },
        'ignore-init-module-imports': {
          description:
            "Avoid automatically removing unused imports in `__init__.py` files. Such imports will still be flagged, but with a dedicated message suggesting that the import is either added to the module's `__all__` symbol, or re-exported with a redundant alias (e.g., `import os as os`).\n\nThis option is enabled by default, but you can opt-in to removal of imports via an unsafe fix.",
          deprecated: true,
          type: ['boolean', 'null'],
        },
        isort: {
          description: 'Options for the `isort` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/IsortOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'logger-objects': {
          description:
            'A list of objects that should be treated equivalently to a `logging.Logger` object.\n\nThis is useful for ensuring proper diagnostics (e.g., to identify `logging` deprecations and other best-practices) for projects that re-export a `logging.Logger` object from a common module.\n\nFor example, if you have a module `logging_setup.py` with the following contents: ```python import logging\n\nlogger = logging.getLogger(__name__) ```\n\nAdding `"logging_setup.logger"` to `logger-objects` will ensure that `logging_setup.logger` is treated as a `logging.Logger` object when imported from other modules (e.g., `from logging_setup import logger`).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        mccabe: {
          description: 'Options for the `mccabe` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/McCabeOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'pep8-naming': {
          description: 'Options for the `pep8-naming` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/Pep8NamingOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        'per-file-ignores': {
          description:
            "A list of mappings from file pattern to rule codes or prefixes to exclude, when considering any matching files. An initial '!' negates the file pattern.",
          type: ['object', 'null'],
          additionalProperties: {
            type: 'array',
            items: {
              $ref: '#/definitions/RuleSelector',
            },
          },
        },
        preview: {
          description:
            'Whether to enable preview mode. When preview mode is enabled, Ruff will use unstable rules and fixes.',
          type: ['boolean', 'null'],
        },
        pycodestyle: {
          description: 'Options for the `pycodestyle` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/PycodestyleOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        pydocstyle: {
          description: 'Options for the `pydocstyle` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/PydocstyleOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        pyflakes: {
          description: 'Options for the `pyflakes` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/PyflakesOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        pylint: {
          description: 'Options for the `pylint` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/PylintOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        pyupgrade: {
          description: 'Options for the `pyupgrade` plugin.',
          anyOf: [
            {
              $ref: '#/definitions/PyUpgradeOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        ruff: {
          description: 'Options for the `ruff` plugin',
          anyOf: [
            {
              $ref: '#/definitions/RuffOptions',
            },
            {
              type: 'null',
            },
          ],
        },
        select: {
          description:
            'A list of rule codes or prefixes to enable. Prefixes can specify exact rules (like `F841`), entire categories (like `F`), or anything in between.\n\nWhen breaking ties between enabled and disabled rules (via `select` and `ignore`, respectively), more specific prefixes override less specific prefixes.',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/RuleSelector',
          },
        },
        'task-tags': {
          description:
            'A list of task tags to recognize (e.g., "TODO", "FIXME", "XXX").\n\nComments starting with these tags will be ignored by commented-out code detection (`ERA`), and skipped by line-length rules (`E501`) if [`ignore-overlong-task-comments`](#lint_pycodestyle_ignore-overlong-task-comments) is set to `true`.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'typing-modules': {
          description:
            'A list of modules whose exports should be treated equivalently to members of the `typing` module.\n\nThis is useful for ensuring proper type annotation inference for projects that re-export `typing` and `typing_extensions` members from a compatibility module. If omitted, any members imported from modules apart from `typing` and `typing_extensions` will be treated as ordinary Python objects.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        unfixable: {
          description:
            'A list of rule codes or prefixes to consider non-fixable.',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/RuleSelector',
          },
        },
      },
      additionalProperties: false,
    },
    McCabeOptions: {
      type: 'object',
      properties: {
        'max-complexity': {
          description:
            'The maximum McCabe complexity to allow before triggering `C901` errors.',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
      },
      additionalProperties: false,
    },
    NameImports: {
      type: 'string',
    },
    OutputFormat: {
      oneOf: [
        {
          type: 'string',
          enum: [
            'concise',
            'full',
            'json',
            'json-lines',
            'junit',
            'grouped',
            'github',
            'gitlab',
            'pylint',
            'rdjson',
            'azure',
            'sarif',
          ],
        },
        {
          deprecated: true,
          type: 'string',
          enum: ['text'],
        },
      ],
    },
    ParametrizeNameType: {
      type: 'string',
      enum: ['csv', 'tuple', 'list'],
    },
    ParametrizeValuesRowType: {
      type: 'string',
      enum: ['tuple', 'list'],
    },
    ParametrizeValuesType: {
      type: 'string',
      enum: ['tuple', 'list'],
    },
    Pep8NamingOptions: {
      type: 'object',
      properties: {
        'classmethod-decorators': {
          description:
            'A list of decorators that, when applied to a method, indicate that the method should be treated as a class method (in addition to the builtin `@classmethod`).\n\nFor example, Ruff will expect that any method decorated by a decorator in this list takes a `cls` argument as its first argument.\n\nExpects to receive a list of fully-qualified names (e.g., `pydantic.validator`, rather than `validator`) or alternatively a plain name which is then matched against the last segment in case the decorator itself consists of a dotted name.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'extend-ignore-names': {
          description:
            'Additional names (or patterns) to ignore when considering `pep8-naming` violations, in addition to those included in [`ignore-names`](#lint_pep8-naming_ignore-names).\n\nSupports glob patterns. For example, to ignore all names starting with `test_` or ending with `_test`, you could use `ignore-names = ["test_*", "*_test"]`. For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'ignore-names': {
          description:
            'A list of names (or patterns) to ignore when considering `pep8-naming` violations.\n\nSupports glob patterns. For example, to ignore all names starting with `test_` or ending with `_test`, you could use `ignore-names = ["test_*", "*_test"]`. For more information on the glob syntax, refer to the [`globset` documentation](https://docs.rs/globset/latest/globset/#syntax).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'staticmethod-decorators': {
          description:
            'A list of decorators that, when applied to a method, indicate that the method should be treated as a static method (in addition to the builtin `@staticmethod`).\n\nFor example, Ruff will expect that any method decorated by a decorator in this list has no `self` or `cls` argument.\n\nExpects to receive a list of fully-qualified names (e.g., `belay.Device.teardown`, rather than `teardown`) or alternatively a plain name which is then matched against the last segment in case the decorator itself consists of a dotted name.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    PyUpgradeOptions: {
      type: 'object',
      properties: {
        'keep-runtime-typing': {
          description:
            'Whether to avoid [PEP 585](https://peps.python.org/pep-0585/) (`List[int]` -> `list[int]`) and [PEP 604](https://peps.python.org/pep-0604/) (`Union[str, int]` -> `str | int`) rewrites even if a file imports `from __future__ import annotations`.\n\nThis setting is only applicable when the target Python version is below 3.9 and 3.10 respectively, and is most commonly used when working with libraries like Pydantic and FastAPI, which rely on the ability to parse type annotations at runtime. The use of `from __future__ import annotations` causes Python to treat the type annotations as strings, which typically allows for the use of language features that appear in later Python versions but are not yet supported by the current version (e.g., `str | int`). However, libraries that rely on runtime type annotations will break if the annotations are incompatible with the current Python version.\n\nFor example, while the following is valid Python 3.8 code due to the presence of `from __future__ import annotations`, the use of `str | int` prior to Python 3.10 will cause Pydantic to raise a `TypeError` at runtime:\n\n```python from __future__ import annotations\n\nimport pydantic\n\nclass Foo(pydantic.BaseModel): bar: str | int ```',
          type: ['boolean', 'null'],
        },
      },
      additionalProperties: false,
    },
    PycodestyleOptions: {
      type: 'object',
      properties: {
        'ignore-overlong-task-comments': {
          description:
            'Whether line-length violations (`E501`) should be triggered for comments starting with [`task-tags`](#lint_task-tags) (by default: "TODO", "FIXME", and "XXX").',
          type: ['boolean', 'null'],
        },
        'max-doc-length': {
          description:
            'The maximum line length to allow for [`doc-line-too-long`](https://docs.astral.sh/ruff/rules/doc-line-too-long/) violations within documentation (`W505`), including standalone comments. By default, this is set to `null` which disables reporting violations.\n\nThe length is determined by the number of characters per line, except for lines containing Asian characters or emojis. For these lines, the [unicode width](https://unicode.org/reports/tr11/) of each character is added up to determine the length.\n\nSee the [`doc-line-too-long`](https://docs.astral.sh/ruff/rules/doc-line-too-long/) rule for more information.',
          anyOf: [
            {
              $ref: '#/definitions/LineLength',
            },
            {
              type: 'null',
            },
          ],
        },
        'max-line-length': {
          description:
            "The maximum line length to allow for [`line-too-long`](https://docs.astral.sh/ruff/rules/line-too-long/) violations. By default, this is set to the value of the [`line-length`](#line-length) option.\n\nUse this option when you want to detect extra-long lines that the formatter can't automatically split by setting `pycodestyle.line-length` to a value larger than [`line-length`](#line-length).\n\n```toml # The formatter wraps lines at a length of 88. line-length = 88\n\n[pycodestyle] # E501 reports lines that exceed the length of 100. max-line-length = 100 ```\n\nThe length is determined by the number of characters per line, except for lines containing East Asian characters or emojis. For these lines, the [unicode width](https://unicode.org/reports/tr11/) of each character is added up to determine the length.\n\nSee the [`line-too-long`](https://docs.astral.sh/ruff/rules/line-too-long/) rule for more information.",
          anyOf: [
            {
              $ref: '#/definitions/LineLength',
            },
            {
              type: 'null',
            },
          ],
        },
      },
      additionalProperties: false,
    },
    PydocstyleOptions: {
      type: 'object',
      properties: {
        convention: {
          description:
            'Whether to use Google-style, NumPy-style conventions, or the [PEP 257](https://peps.python.org/pep-0257/) defaults when analyzing docstring sections.\n\nEnabling a convention will disable all rules that are not included in the specified convention. As such, the intended workflow is to enable a convention and then selectively enable or disable any additional rules on top of it.\n\nFor example, to use Google-style conventions but avoid requiring documentation for every function parameter:\n\n```toml [tool.ruff.lint] # Enable all `pydocstyle` rules, limiting to those that adhere to the # Google convention via `convention = "google"`, below. select = ["D"]\n\n# On top of the Google convention, disable `D417`, which requires # documentation for every function parameter. ignore = ["D417"]\n\n[tool.ruff.lint.pydocstyle] convention = "google" ```\n\nTo enable an additional rule that\'s excluded from the convention, select the desired rule via its fully qualified rule code (e.g., `D400` instead of `D4` or `D40`):\n\n```toml [tool.ruff.lint] # Enable D400 on top of the Google convention. extend-select = ["D400"]\n\n[tool.ruff.lint.pydocstyle] convention = "google" ```',
          anyOf: [
            {
              $ref: '#/definitions/Convention',
            },
            {
              type: 'null',
            },
          ],
        },
        'ignore-decorators': {
          description:
            'Ignore docstrings for functions or methods decorated with the specified fully-qualified decorators.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
        'property-decorators': {
          description:
            'A list of decorators that, when applied to a method, indicate that the method should be treated as a property (in addition to the builtin `@property` and standard-library `@functools.cached_property`).\n\nFor example, Ruff will expect that any method decorated by a decorator in this list can use a non-imperative summary line.',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    PyflakesOptions: {
      type: 'object',
      properties: {
        'extend-generics': {
          description:
            'Additional functions or classes to consider generic, such that any subscripts should be treated as type annotation (e.g., `ForeignKey` in `django.db.models.ForeignKey["User"]`.\n\nExpects to receive a list of fully-qualified names (e.g., `django.db.models.ForeignKey`, rather than `ForeignKey`).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    },
    PylintOptions: {
      type: 'object',
      properties: {
        'allow-dunder-method-names': {
          description:
            'Dunder methods name to allow, in addition to the default set from the Python standard library (see `PLW3201`).',
          type: ['array', 'null'],
          items: {
            type: 'string',
          },
          uniqueItems: true,
        },
        'allow-magic-value-types': {
          description:
            'Constant types to ignore when used as "magic values" (see `PLR2004`).',
          type: ['array', 'null'],
          items: {
            $ref: '#/definitions/ConstantType',
          },
        },
        'max-args': {
          description:
            'Maximum number of arguments allowed for a function or method definition (see `PLR0913`).',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
        'max-bool-expr': {
          description:
            'Maximum number of Boolean expressions allowed within a single `if` statement (see `PLR0916`).',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
        'max-branches': {
          description:
            'Maximum number of branches allowed for a function or method body (see `PLR0912`).',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
        'max-locals': {
          description:
            'Maximum number of local variables allowed for a function or method body (see `PLR0914`).',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
        'max-nested-blocks': {
          description:
            'Maximum number of nested blocks allowed within a function or method body (see `PLR1702`).',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
        'max-positional-args': {
          description:
            'Maximum number of positional arguments allowed for a function or method definition (see `PLR0917`).\n\nIf not specified, defaults to the value of `max-args`.',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
        'max-public-methods': {
          description:
            'Maximum number of public methods allowed for a class (see `PLR0904`).',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
        'max-returns': {
          description:
            'Maximum number of return statements allowed for a function or method body (see `PLR0911`)',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
        'max-statements': {
          description:
            'Maximum number of statements allowed for a function or method body (see `PLR0915`).',
          type: ['integer', 'null'],
          format: 'uint',
          minimum: 0.0,
        },
      },
      additionalProperties: false,
    },
    PythonVersion: {
      type: 'string',
      enum: ['py37', 'py38', 'py39', 'py310', 'py311', 'py312', 'py313'],
    },
    Quote: {
      oneOf: [
        {
          description: 'Use double quotes.',
          type: 'string',
          enum: ['double'],
        },
        {
          description: 'Use single quotes.',
          type: 'string',
          enum: ['single'],
        },
      ],
    },
    QuoteStyle: {
      type: 'string',
      enum: ['single', 'double', 'preserve'],
    },
    RelativeImportsOrder: {
      oneOf: [
        {
          description:
            'Place "closer" imports (fewer `.` characters, most local) before "further" imports (more `.` characters, least local).',
          type: 'string',
          enum: ['closest-to-furthest'],
        },
        {
          description:
            'Place "further" imports (more `.` characters, least local) imports before "closer" imports (fewer `.` characters, most local).',
          type: 'string',
          enum: ['furthest-to-closest'],
        },
      ],
    },
    RequiredVersion: {
      type: 'string',
    },
    RuffOptions: {
      type: 'object',
      properties: {
        'parenthesize-tuple-in-subscript': {
          description:
            'Whether to prefer accessing items keyed by tuples with parentheses around the tuple (see `RUF031`).',
          type: ['boolean', 'null'],
        },
      },
      additionalProperties: false,
    },
    RuleSelector: {
      type: 'string',
      enum: [
        'A',
        'A0',
        'A00',
        'A001',
        'A002',
        'A003',
        'A004',
        'A005',
        'A006',
        'AIR',
        'AIR0',
        'AIR00',
        'AIR001',
        'ALL',
        'ANN',
        'ANN0',
        'ANN00',
        'ANN001',
        'ANN002',
        'ANN003',
        'ANN1',
        'ANN10',
        'ANN101',
        'ANN102',
        'ANN2',
        'ANN20',
        'ANN201',
        'ANN202',
        'ANN204',
        'ANN205',
        'ANN206',
        'ANN4',
        'ANN40',
        'ANN401',
        'ARG',
        'ARG0',
        'ARG00',
        'ARG001',
        'ARG002',
        'ARG003',
        'ARG004',
        'ARG005',
        'ASYNC',
        'ASYNC1',
        'ASYNC10',
        'ASYNC100',
        'ASYNC105',
        'ASYNC109',
        'ASYNC11',
        'ASYNC110',
        'ASYNC115',
        'ASYNC116',
        'ASYNC2',
        'ASYNC21',
        'ASYNC210',
        'ASYNC22',
        'ASYNC220',
        'ASYNC221',
        'ASYNC222',
        'ASYNC23',
        'ASYNC230',
        'ASYNC25',
        'ASYNC251',
        'B',
        'B0',
        'B00',
        'B002',
        'B003',
        'B004',
        'B005',
        'B006',
        'B007',
        'B008',
        'B009',
        'B01',
        'B010',
        'B011',
        'B012',
        'B013',
        'B014',
        'B015',
        'B016',
        'B017',
        'B018',
        'B019',
        'B02',
        'B020',
        'B021',
        'B022',
        'B023',
        'B024',
        'B025',
        'B026',
        'B027',
        'B028',
        'B029',
        'B03',
        'B030',
        'B031',
        'B032',
        'B033',
        'B034',
        'B035',
        'B039',
        'B9',
        'B90',
        'B901',
        'B904',
        'B905',
        'B909',
        'BLE',
        'BLE0',
        'BLE00',
        'BLE001',
        'C',
        'C4',
        'C40',
        'C400',
        'C401',
        'C402',
        'C403',
        'C404',
        'C405',
        'C406',
        'C408',
        'C409',
        'C41',
        'C410',
        'C411',
        'C413',
        'C414',
        'C415',
        'C416',
        'C417',
        'C418',
        'C419',
        'C42',
        'C420',
        'C9',
        'C90',
        'C901',
        'COM',
        'COM8',
        'COM81',
        'COM812',
        'COM818',
        'COM819',
        'CPY',
        'CPY0',
        'CPY00',
        'CPY001',
        'D',
        'D1',
        'D10',
        'D100',
        'D101',
        'D102',
        'D103',
        'D104',
        'D105',
        'D106',
        'D107',
        'D2',
        'D20',
        'D200',
        'D201',
        'D202',
        'D203',
        'D204',
        'D205',
        'D206',
        'D207',
        'D208',
        'D209',
        'D21',
        'D210',
        'D211',
        'D212',
        'D213',
        'D214',
        'D215',
        'D3',
        'D30',
        'D300',
        'D301',
        'D4',
        'D40',
        'D400',
        'D401',
        'D402',
        'D403',
        'D404',
        'D405',
        'D406',
        'D407',
        'D408',
        'D409',
        'D41',
        'D410',
        'D411',
        'D412',
        'D413',
        'D414',
        'D415',
        'D416',
        'D417',
        'D418',
        'D419',
        'DJ',
        'DJ0',
        'DJ00',
        'DJ001',
        'DJ003',
        'DJ006',
        'DJ007',
        'DJ008',
        'DJ01',
        'DJ012',
        'DJ013',
        'DOC',
        'DOC2',
        'DOC20',
        'DOC201',
        'DOC202',
        'DOC4',
        'DOC40',
        'DOC402',
        'DOC403',
        'DOC5',
        'DOC50',
        'DOC501',
        'DOC502',
        'DTZ',
        'DTZ0',
        'DTZ00',
        'DTZ001',
        'DTZ002',
        'DTZ003',
        'DTZ004',
        'DTZ005',
        'DTZ006',
        'DTZ007',
        'DTZ01',
        'DTZ011',
        'DTZ012',
        'E',
        'E1',
        'E10',
        'E101',
        'E11',
        'E111',
        'E112',
        'E113',
        'E114',
        'E115',
        'E116',
        'E117',
        'E2',
        'E20',
        'E201',
        'E202',
        'E203',
        'E204',
        'E21',
        'E211',
        'E22',
        'E221',
        'E222',
        'E223',
        'E224',
        'E225',
        'E226',
        'E227',
        'E228',
        'E23',
        'E231',
        'E24',
        'E241',
        'E242',
        'E25',
        'E251',
        'E252',
        'E26',
        'E261',
        'E262',
        'E265',
        'E266',
        'E27',
        'E271',
        'E272',
        'E273',
        'E274',
        'E275',
        'E3',
        'E30',
        'E301',
        'E302',
        'E303',
        'E304',
        'E305',
        'E306',
        'E4',
        'E40',
        'E401',
        'E402',
        'E5',
        'E50',
        'E501',
        'E502',
        'E7',
        'E70',
        'E701',
        'E702',
        'E703',
        'E71',
        'E711',
        'E712',
        'E713',
        'E714',
        'E72',
        'E721',
        'E722',
        'E73',
        'E731',
        'E74',
        'E741',
        'E742',
        'E743',
        'E9',
        'E90',
        'E902',
        'E99',
        'E999',
        'EM',
        'EM1',
        'EM10',
        'EM101',
        'EM102',
        'EM103',
        'ERA',
        'ERA0',
        'ERA00',
        'ERA001',
        'EXE',
        'EXE0',
        'EXE00',
        'EXE001',
        'EXE002',
        'EXE003',
        'EXE004',
        'EXE005',
        'F',
        'F4',
        'F40',
        'F401',
        'F402',
        'F403',
        'F404',
        'F405',
        'F406',
        'F407',
        'F5',
        'F50',
        'F501',
        'F502',
        'F503',
        'F504',
        'F505',
        'F506',
        'F507',
        'F508',
        'F509',
        'F52',
        'F521',
        'F522',
        'F523',
        'F524',
        'F525',
        'F54',
        'F541',
        'F6',
        'F60',
        'F601',
        'F602',
        'F62',
        'F621',
        'F622',
        'F63',
        'F631',
        'F632',
        'F633',
        'F634',
        'F7',
        'F70',
        'F701',
        'F702',
        'F704',
        'F706',
        'F707',
        'F72',
        'F722',
        'F8',
        'F81',
        'F811',
        'F82',
        'F821',
        'F822',
        'F823',
        'F84',
        'F841',
        'F842',
        'F9',
        'F90',
        'F901',
        'FA',
        'FA1',
        'FA10',
        'FA100',
        'FA102',
        'FAST',
        'FAST0',
        'FAST00',
        'FAST001',
        'FAST002',
        'FAST003',
        'FBT',
        'FBT0',
        'FBT00',
        'FBT001',
        'FBT002',
        'FBT003',
        'FIX',
        'FIX0',
        'FIX00',
        'FIX001',
        'FIX002',
        'FIX003',
        'FIX004',
        'FLY',
        'FLY0',
        'FLY00',
        'FLY002',
        'FURB',
        'FURB1',
        'FURB10',
        'FURB101',
        'FURB103',
        'FURB105',
        'FURB11',
        'FURB110',
        'FURB113',
        'FURB116',
        'FURB118',
        'FURB12',
        'FURB129',
        'FURB13',
        'FURB131',
        'FURB132',
        'FURB136',
        'FURB14',
        'FURB140',
        'FURB142',
        'FURB145',
        'FURB148',
        'FURB15',
        'FURB152',
        'FURB154',
        'FURB157',
        'FURB16',
        'FURB161',
        'FURB163',
        'FURB164',
        'FURB166',
        'FURB167',
        'FURB168',
        'FURB169',
        'FURB17',
        'FURB171',
        'FURB177',
        'FURB18',
        'FURB180',
        'FURB181',
        'FURB187',
        'FURB19',
        'FURB192',
        'G',
        'G0',
        'G00',
        'G001',
        'G002',
        'G003',
        'G004',
        'G01',
        'G010',
        'G1',
        'G10',
        'G101',
        'G2',
        'G20',
        'G201',
        'G202',
        'I',
        'I0',
        'I00',
        'I001',
        'I002',
        'ICN',
        'ICN0',
        'ICN00',
        'ICN001',
        'ICN002',
        'ICN003',
        'INP',
        'INP0',
        'INP00',
        'INP001',
        'INT',
        'INT0',
        'INT00',
        'INT001',
        'INT002',
        'INT003',
        'ISC',
        'ISC0',
        'ISC00',
        'ISC001',
        'ISC002',
        'ISC003',
        'LOG',
        'LOG0',
        'LOG00',
        'LOG001',
        'LOG002',
        'LOG007',
        'LOG009',
        'N',
        'N8',
        'N80',
        'N801',
        'N802',
        'N803',
        'N804',
        'N805',
        'N806',
        'N807',
        'N81',
        'N811',
        'N812',
        'N813',
        'N814',
        'N815',
        'N816',
        'N817',
        'N818',
        'N9',
        'N99',
        'N999',
        'NPY',
        'NPY0',
        'NPY00',
        'NPY001',
        'NPY002',
        'NPY003',
        'NPY2',
        'NPY20',
        'NPY201',
        'PD',
        'PD0',
        'PD00',
        'PD002',
        'PD003',
        'PD004',
        'PD007',
        'PD008',
        'PD009',
        'PD01',
        'PD010',
        'PD011',
        'PD012',
        'PD013',
        'PD015',
        'PD1',
        'PD10',
        'PD101',
        'PD9',
        'PD90',
        'PD901',
        'PERF',
        'PERF1',
        'PERF10',
        'PERF101',
        'PERF102',
        'PERF2',
        'PERF20',
        'PERF203',
        'PERF4',
        'PERF40',
        'PERF401',
        'PERF402',
        'PERF403',
        'PGH',
        'PGH0',
        'PGH00',
        'PGH003',
        'PGH004',
        'PGH005',
        'PIE',
        'PIE7',
        'PIE79',
        'PIE790',
        'PIE794',
        'PIE796',
        'PIE8',
        'PIE80',
        'PIE800',
        'PIE804',
        'PIE807',
        'PIE808',
        'PIE81',
        'PIE810',
        'PL',
        'PLC',
        'PLC0',
        'PLC01',
        'PLC010',
        'PLC0105',
        'PLC013',
        'PLC0131',
        'PLC0132',
        'PLC02',
        'PLC020',
        'PLC0205',
        'PLC0206',
        'PLC0208',
        'PLC04',
        'PLC041',
        'PLC0414',
        'PLC0415',
        'PLC1',
        'PLC19',
        'PLC190',
        'PLC1901',
        'PLC2',
        'PLC24',
        'PLC240',
        'PLC2401',
        'PLC2403',
        'PLC27',
        'PLC270',
        'PLC2701',
        'PLC28',
        'PLC280',
        'PLC2801',
        'PLC3',
        'PLC30',
        'PLC300',
        'PLC3002',
        'PLE',
        'PLE0',
        'PLE01',
        'PLE010',
        'PLE0100',
        'PLE0101',
        'PLE011',
        'PLE0115',
        'PLE0116',
        'PLE0117',
        'PLE0118',
        'PLE02',
        'PLE023',
        'PLE0237',
        'PLE024',
        'PLE0241',
        'PLE03',
        'PLE030',
        'PLE0302',
        'PLE0303',
        'PLE0304',
        'PLE0305',
        'PLE0307',
        'PLE0308',
        'PLE0309',
        'PLE06',
        'PLE060',
        'PLE0604',
        'PLE0605',
        'PLE064',
        'PLE0643',
        'PLE07',
        'PLE070',
        'PLE0704',
        'PLE1',
        'PLE11',
        'PLE113',
        'PLE1132',
        'PLE114',
        'PLE1141',
        'PLE1142',
        'PLE12',
        'PLE120',
        'PLE1205',
        'PLE1206',
        'PLE13',
        'PLE130',
        'PLE1300',
        'PLE1307',
        'PLE131',
        'PLE1310',
        'PLE15',
        'PLE150',
        'PLE1507',
        'PLE151',
        'PLE1519',
        'PLE152',
        'PLE1520',
        'PLE17',
        'PLE170',
        'PLE1700',
        'PLE2',
        'PLE25',
        'PLE250',
        'PLE2502',
        'PLE251',
        'PLE2510',
        'PLE2512',
        'PLE2513',
        'PLE2514',
        'PLE2515',
        'PLE4',
        'PLE47',
        'PLE470',
        'PLE4703',
        'PLR',
        'PLR0',
        'PLR01',
        'PLR012',
        'PLR0124',
        'PLR013',
        'PLR0133',
        'PLR02',
        'PLR020',
        'PLR0202',
        'PLR0203',
        'PLR0206',
        'PLR04',
        'PLR040',
        'PLR0402',
        'PLR09',
        'PLR090',
        'PLR0904',
        'PLR091',
        'PLR0911',
        'PLR0912',
        'PLR0913',
        'PLR0914',
        'PLR0915',
        'PLR0916',
        'PLR0917',
        'PLR1',
        'PLR17',
        'PLR170',
        'PLR1702',
        'PLR1704',
        'PLR171',
        'PLR1711',
        'PLR1714',
        'PLR172',
        'PLR1722',
        'PLR173',
        'PLR1730',
        'PLR1733',
        'PLR1736',
        'PLR2',
        'PLR20',
        'PLR200',
        'PLR2004',
        'PLR204',
        'PLR2044',
        'PLR5',
        'PLR55',
        'PLR550',
        'PLR5501',
        'PLR6',
        'PLR61',
        'PLR610',
        'PLR6104',
        'PLR62',
        'PLR620',
        'PLR6201',
        'PLR63',
        'PLR630',
        'PLR6301',
        'PLW',
        'PLW0',
        'PLW01',
        'PLW010',
        'PLW0108',
        'PLW012',
        'PLW0120',
        'PLW0127',
        'PLW0128',
        'PLW0129',
        'PLW013',
        'PLW0131',
        'PLW0133',
        'PLW017',
        'PLW0177',
        'PLW02',
        'PLW021',
        'PLW0211',
        'PLW024',
        'PLW0245',
        'PLW04',
        'PLW040',
        'PLW0406',
        'PLW06',
        'PLW060',
        'PLW0602',
        'PLW0603',
        'PLW0604',
        'PLW064',
        'PLW0642',
        'PLW07',
        'PLW071',
        'PLW0711',
        'PLW1',
        'PLW15',
        'PLW150',
        'PLW1501',
        'PLW1508',
        'PLW1509',
        'PLW151',
        'PLW1510',
        'PLW1514',
        'PLW16',
        'PLW164',
        'PLW1641',
        'PLW2',
        'PLW21',
        'PLW210',
        'PLW2101',
        'PLW29',
        'PLW290',
        'PLW2901',
        'PLW3',
        'PLW32',
        'PLW320',
        'PLW3201',
        'PLW33',
        'PLW330',
        'PLW3301',
        'PT',
        'PT0',
        'PT00',
        'PT001',
        'PT002',
        'PT003',
        'PT004',
        'PT005',
        'PT006',
        'PT007',
        'PT008',
        'PT009',
        'PT01',
        'PT010',
        'PT011',
        'PT012',
        'PT013',
        'PT014',
        'PT015',
        'PT016',
        'PT017',
        'PT018',
        'PT019',
        'PT02',
        'PT020',
        'PT021',
        'PT022',
        'PT023',
        'PT024',
        'PT025',
        'PT026',
        'PT027',
        'PTH',
        'PTH1',
        'PTH10',
        'PTH100',
        'PTH101',
        'PTH102',
        'PTH103',
        'PTH104',
        'PTH105',
        'PTH106',
        'PTH107',
        'PTH108',
        'PTH109',
        'PTH11',
        'PTH110',
        'PTH111',
        'PTH112',
        'PTH113',
        'PTH114',
        'PTH115',
        'PTH116',
        'PTH117',
        'PTH118',
        'PTH119',
        'PTH12',
        'PTH120',
        'PTH121',
        'PTH122',
        'PTH123',
        'PTH124',
        'PTH2',
        'PTH20',
        'PTH201',
        'PTH202',
        'PTH203',
        'PTH204',
        'PTH205',
        'PTH206',
        'PTH207',
        'PYI',
        'PYI0',
        'PYI00',
        'PYI001',
        'PYI002',
        'PYI003',
        'PYI004',
        'PYI005',
        'PYI006',
        'PYI007',
        'PYI008',
        'PYI009',
        'PYI01',
        'PYI010',
        'PYI011',
        'PYI012',
        'PYI013',
        'PYI014',
        'PYI015',
        'PYI016',
        'PYI017',
        'PYI018',
        'PYI019',
        'PYI02',
        'PYI020',
        'PYI021',
        'PYI024',
        'PYI025',
        'PYI026',
        'PYI029',
        'PYI03',
        'PYI030',
        'PYI032',
        'PYI033',
        'PYI034',
        'PYI035',
        'PYI036',
        'PYI04',
        'PYI041',
        'PYI042',
        'PYI043',
        'PYI044',
        'PYI045',
        'PYI046',
        'PYI047',
        'PYI048',
        'PYI049',
        'PYI05',
        'PYI050',
        'PYI051',
        'PYI052',
        'PYI053',
        'PYI054',
        'PYI055',
        'PYI056',
        'PYI057',
        'PYI058',
        'PYI059',
        'PYI06',
        'PYI062',
        'PYI063',
        'PYI064',
        'PYI066',
        'Q',
        'Q0',
        'Q00',
        'Q000',
        'Q001',
        'Q002',
        'Q003',
        'Q004',
        'RET',
        'RET5',
        'RET50',
        'RET501',
        'RET502',
        'RET503',
        'RET504',
        'RET505',
        'RET506',
        'RET507',
        'RET508',
        'RSE',
        'RSE1',
        'RSE10',
        'RSE102',
        'RUF',
        'RUF0',
        'RUF00',
        'RUF001',
        'RUF002',
        'RUF003',
        'RUF005',
        'RUF006',
        'RUF007',
        'RUF008',
        'RUF009',
        'RUF01',
        'RUF010',
        'RUF012',
        'RUF013',
        'RUF015',
        'RUF016',
        'RUF017',
        'RUF018',
        'RUF019',
        'RUF02',
        'RUF020',
        'RUF021',
        'RUF022',
        'RUF023',
        'RUF024',
        'RUF026',
        'RUF027',
        'RUF028',
        'RUF029',
        'RUF03',
        'RUF030',
        'RUF031',
        'RUF032',
        'RUF033',
        'RUF034',
        'RUF1',
        'RUF10',
        'RUF100',
        'RUF101',
        'RUF2',
        'RUF20',
        'RUF200',
        'S',
        'S1',
        'S10',
        'S101',
        'S102',
        'S103',
        'S104',
        'S105',
        'S106',
        'S107',
        'S108',
        'S11',
        'S110',
        'S112',
        'S113',
        'S2',
        'S20',
        'S201',
        'S202',
        'S3',
        'S30',
        'S301',
        'S302',
        'S303',
        'S304',
        'S305',
        'S306',
        'S307',
        'S308',
        'S31',
        'S310',
        'S311',
        'S312',
        'S313',
        'S314',
        'S315',
        'S316',
        'S317',
        'S318',
        'S319',
        'S32',
        'S320',
        'S321',
        'S323',
        'S324',
        'S4',
        'S40',
        'S401',
        'S402',
        'S403',
        'S404',
        'S405',
        'S406',
        'S407',
        'S408',
        'S409',
        'S41',
        'S411',
        'S412',
        'S413',
        'S415',
        'S5',
        'S50',
        'S501',
        'S502',
        'S503',
        'S504',
        'S505',
        'S506',
        'S507',
        'S508',
        'S509',
        'S6',
        'S60',
        'S601',
        'S602',
        'S603',
        'S604',
        'S605',
        'S606',
        'S607',
        'S608',
        'S609',
        'S61',
        'S610',
        'S611',
        'S612',
        'S7',
        'S70',
        'S701',
        'S702',
        'SIM',
        'SIM1',
        'SIM10',
        'SIM101',
        'SIM102',
        'SIM103',
        'SIM105',
        'SIM107',
        'SIM108',
        'SIM109',
        'SIM11',
        'SIM110',
        'SIM112',
        'SIM113',
        'SIM114',
        'SIM115',
        'SIM116',
        'SIM117',
        'SIM118',
        'SIM2',
        'SIM20',
        'SIM201',
        'SIM202',
        'SIM208',
        'SIM21',
        'SIM210',
        'SIM211',
        'SIM212',
        'SIM22',
        'SIM220',
        'SIM221',
        'SIM222',
        'SIM223',
        'SIM3',
        'SIM30',
        'SIM300',
        'SIM4',
        'SIM40',
        'SIM401',
        'SIM9',
        'SIM91',
        'SIM910',
        'SIM911',
        'SLF',
        'SLF0',
        'SLF00',
        'SLF001',
        'SLOT',
        'SLOT0',
        'SLOT00',
        'SLOT000',
        'SLOT001',
        'SLOT002',
        'T',
        'T1',
        'T10',
        'T100',
        'T2',
        'T20',
        'T201',
        'T203',
        'TCH',
        'TCH0',
        'TCH00',
        'TCH001',
        'TCH002',
        'TCH003',
        'TCH004',
        'TCH005',
        'TCH01',
        'TCH010',
        'TD',
        'TD0',
        'TD00',
        'TD001',
        'TD002',
        'TD003',
        'TD004',
        'TD005',
        'TD006',
        'TD007',
        'TID',
        'TID2',
        'TID25',
        'TID251',
        'TID252',
        'TID253',
        'TRY',
        'TRY0',
        'TRY00',
        'TRY002',
        'TRY003',
        'TRY004',
        'TRY2',
        'TRY20',
        'TRY201',
        'TRY3',
        'TRY30',
        'TRY300',
        'TRY301',
        'TRY302',
        'TRY4',
        'TRY40',
        'TRY400',
        'TRY401',
        'UP',
        'UP0',
        'UP00',
        'UP001',
        'UP003',
        'UP004',
        'UP005',
        'UP006',
        'UP007',
        'UP008',
        'UP009',
        'UP01',
        'UP010',
        'UP011',
        'UP012',
        'UP013',
        'UP014',
        'UP015',
        'UP017',
        'UP018',
        'UP019',
        'UP02',
        'UP020',
        'UP021',
        'UP022',
        'UP023',
        'UP024',
        'UP025',
        'UP026',
        'UP027',
        'UP028',
        'UP029',
        'UP03',
        'UP030',
        'UP031',
        'UP032',
        'UP033',
        'UP034',
        'UP035',
        'UP036',
        'UP037',
        'UP038',
        'UP039',
        'UP04',
        'UP040',
        'UP041',
        'UP042',
        'UP043',
        'W',
        'W1',
        'W19',
        'W191',
        'W2',
        'W29',
        'W291',
        'W292',
        'W293',
        'W3',
        'W39',
        'W391',
        'W5',
        'W50',
        'W505',
        'W6',
        'W60',
        'W605',
        'YTT',
        'YTT1',
        'YTT10',
        'YTT101',
        'YTT102',
        'YTT103',
        'YTT2',
        'YTT20',
        'YTT201',
        'YTT202',
        'YTT203',
        'YTT204',
        'YTT3',
        'YTT30',
        'YTT301',
        'YTT302',
        'YTT303',
      ],
    },
    Strictness: {
      oneOf: [
        {
          description:
            'Ban imports that extend into the parent module or beyond.',
          type: 'string',
          enum: ['parents'],
        },
        {
          description: 'Ban all relative imports.',
          type: 'string',
          enum: ['all'],
        },
      ],
    },
  },
};

export default schema;
