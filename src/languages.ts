import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
export const languagesDefinitions: monaco.languages.ILanguageExtensionPoint[] = [
    {
      id: 'python',
      extensions: [
        '.py',
        '.rpy',
        '.pyw',
        '.cpy',
        '.gyp',
        '.gypi',
        '.pyi',
        '.ipy',
        '.bzl',
        '.cconf',
        '.cinc',
        '.mcconf',
        '.sky',
        '.td',
        '.tw',
      ],
      aliases: ['Python', 'py'],
      filenames: ['Snakefile', 'BUILD', 'BUCK', 'TARGETS'],
      firstLine: '^#!\\s*/?.*\\bpython[0-9.-]*\\b',
    },
    {
        id: "c",
        extensions: [
            ".c",
            ".i"
        ],
        aliases: [
            "C",
            "c"
        ],
    },
    {
      id: 'cpp',
      extensions: [
        '.cpp',
        '.cc',
        '.cxx',
        '.c++',
        '.hpp',
        '.hh',
        '.hxx',
        '.h++',
        '.h',
        '.ii',
        '.ino',
        '.inl',
        '.ipp',
        '.hpp.in',
        '.h.in',
      ],
      aliases: ['C++', 'Cpp', 'cpp'],
    },
    {
        id: 'html',
        extensions: [
          '.html',
          '.htm',
          '.shtml',
          '.xhtml',
          '.xht',
          '.mdoc',
          '.jsp',
          '.asp',
          '.aspx',
          '.jshtm',
          '.volt',
          '.ejs',
          '.rhtml'
        ],
        aliases: ['HTML', 'htm', 'html','xhtml'],
        mimetypes: [
          'text/html',
          'text/x-jshtm',
          'text/template',
          'text/ng-template',
          'application/xhtml+xml'
        ],
      },
      {
        id: "javascriptreact",
        aliases: [
          "JavaScript React",
          "jsx"
        ],
        extensions: [
          ".jsx"
        ],
      },
      {
        id: "javascript",
        aliases: [
          "JavaScript",
          "javascript",
          "js"
        ],
        extensions: [
          ".js",
          ".es6",
          ".mjs",
          ".cjs",
          ".pac"
        ],
        filenames: [
          "jakefile"
        ],
        firstLine: "^#!.*\\bnode",
        mimetypes: [
          "text/javascript"
        ],
      },
      {
        id: "jsx-tags",
        aliases: [],
      },
      {
        id: "javascriptreact",
        aliases: [
          "JavaScript React",
          "jsx"
        ],
        extensions: [
          ".jsx"
        ],
      },
      {
        id: "css",
        aliases: [
          "CSS",
          "css",
        ],
        extensions: [
          ".css",
        ],
        mimetypes: [
          "text/css"
        ],
      },
      {
        id: "typescript",
        aliases: [
          "TypeScript",
          "ts",
          "typescript"
        ],
        extensions: [
          ".ts"
        ]
      },
      {
        id: "typescriptreact",
        aliases: [
          "TypeScript React",
          "tsx"
        ],
        extensions: [
          ".tsx"
        ]
      },
      {
        id: "jsonc",
        filenames: [
          "tsconfig.json",
          "jsconfig.json"
        ],
        filenamePatterns: [
          "tsconfig.*.json",
          "jsconfig.*.json",
          "tsconfig-*.json",
          "jsconfig-*.json"
        ]
      },
      {
        id: "bat",
        extensions: [ ".bat", ".cmd"],
        aliases: [ "Batch", "bat" ]
      },
      {
        id: "csharp",
        extensions: [
          ".cs",
          ".csx",
          ".cake"
        ],
        aliases: [
          "C#",
          "csharp"
        ]
      },
      {
        id: "clojure",
        aliases: ["Clojure", "clojure"],
        extensions: [".clj", ".cljs", ".cljc", ".cljx", ".clojure", ".edn"]
      },
      {
        id: "coffeescript",
        extensions: [ ".coffee", ".cson", ".iced" ],
        aliases: [ "CoffeeScript", "coffeescript", "coffee"]
      },
      {
        id: "dockerfile",
        extensions: [ ".dockerfile", ".containerfile" ],
        filenames: [ "Dockerfile", "Containerfile" ],
        filenamePatterns: [ "Dockerfile.*", "Containerfile.*" ],
        aliases: [ "Docker", "Dockerfile", "Containerfile" ]
    },
    {
        id: "fsharp",
        extensions: [ ".fs", ".fsi", ".fsx", ".fsscript" ],
        aliases: [ "F#", "FSharp", "fsharp" ]
    },
    {
        id: "go",
        extensions: [ ".go", ".fsi", ".fsx", ".fsscript" ],
        aliases: [ "Go"]
    },
    {
        id: "groovy",
        aliases: ["Groovy", "groovy"],
        extensions: [".groovy", ".gvy", ".gradle", ".jenkinsfile", ".nf"],
        filenames: ["Jenkinsfile"],
        filenamePatterns: ["Jenkinsfile.*"],
        firstLine: "^#!.*\\bgroovy\\b",
    },
    {
        id: "hlsl",
        extensions: [".hlsl",".hlsli",".fx",".fxh",".vsh",".psh",".cginc",".compute"],
        aliases: ["HLSL", "hlsl"],
    },
    {
        id: "handlebars",
        extensions: [ ".handlebars", ".hbs", ".hjs" ],
        aliases: [ "Handlebars", "handlebars" ],
        mimetypes: ["text/x-handlebars-template"],
    },
    // {
    //     id: "ini",
    //     extensions: [ ".ini"],
    //     aliases: [ "Ini", "ini"],
    // },
    {
        id: "properties",
        extensions: [ ".ini, .properties", ".cfg", ".conf", ".directory", ".gitattributes", ".gitconfig", ".gitmodules", ".editorconfig" ],
        filenames: [ "gitconfig" ],
        filenamePatterns: [ "**/.config/git/config", "**/.git/config" ],
        aliases: [ "Properties", "properties","ini","Ini" ]
    },
    {
        id: "json",
        extensions: [ ".json", ".bowerrc", ".jscsrc", ".js.map", ".css.map", ".ts.map", ".har", ".jslintrc", ".jsonld" ],
        filenames: [ "composer.lock",".watchmanconfig",".ember-cli" ],
        mimetypes: [ "application/json", "application/json" ],
        aliases: [ "JSON", "json"]
    },
    {
        id: "jsonc",
        aliases: [
          "JSON with Comments"
        ],
        extensions: [
          ".jsonc",
          ".eslintrc",
          ".eslintrc.json",
          ".jsfmtrc",
          ".jshintrc",
          ".swcrc",
          ".hintrc",
          ".babelrc"
        ]
      },
      {
        id: "java",
        extensions: [ ".java", ".jav" ],
        aliases: [ "Java", "java" ]
      },
      {
        id: "less",
        aliases: ["Less", "less"],
        extensions: [".less"],
        mimetypes: ["text/x-less", "text/less"]
      },
      {
        id: "log",
        extensions: [
            ".log",
            "*.log.?"
        ],
        aliases: [
            "Log"
        ]
      },
      {
        id: "lua",
        extensions: [ ".lua" ],
        aliases: [ "Lua", "lua" ]
      },
      {
        id: "makefile",
        aliases: [
            "Makefile",
            "makefile"
        ],
        extensions: [
            ".mk"
        ],
        filenames: [
            "Makefile",
            "makefile",
            "GNUmakefile",
            "OCamlMakefile"
        ],
        firstLine: "^#!\\s*/usr/bin/make"
      },
      {
        id: "markdown",
        aliases: [
            "Markdown",
            "markdown"
        ],
        extensions: [
            ".md",
            ".mkd",
            ".mdwn",
            ".mdown",
            ".markdown",
            ".markdn",
            ".mdtxt",
            ".mdtext",
            ".workbook"
        ]
      },
      {
        id: "objective-c",
        extensions: [
            ".m"
        ],
        aliases: [
            "Objective-C"
        ]
      },
      {
        id: "objective-cpp",
        extensions: [
            ".mm"
        ],
        aliases: [
            "Objective-C++"
        ]
      },
      {
        id: "php",
        extensions: [
            ".php",
            ".php4",
            ".php5",
            ".phtml",
            ".ctp"
        ],
        aliases: [
            "PHP",
            "php"
        ],
        firstLine: "^#!\\s*/.*\\bphp\\b",
        mimetypes: [
            "application/x-php"
        ]
      },
      {
        id: "perl",
        aliases: ["Perl", "perl"],
        extensions: [".pl", ".pm", ".pod", ".t", ".PL", ".psgi"],
        firstLine: "^#!.*\\bperl\\b",
      }, 
      {
        id: "perl6",
        aliases: ["Perl 6", "perl6"],
        extensions: [".p6", ".pl6", ".pm6", ".nqp"],
        firstLine: "(^#!.*\\bperl6\\b)|use\\s+v6",
      },
      {
        id: "powershell",
        extensions: [ ".ps1", ".psm1", ".psd1", ".pssc", ".psrc" ],
        aliases: [ "PowerShell", "powershell", "ps", "ps1" ],
        firstLine: "^#!\\s*/.*\\bpwsh\\b",
      },
      {
        id: "jade",
        extensions: [ ".pug", ".jade" ],
        aliases: [ "Pug", "Jade", "jade" ]
      },
      {
        id: "r",
        extensions: [ ".r", ".rhistory", ".rprofile", ".rt" ],
        aliases: [ "R", "r" ]
      },
      {
        id: "razor",
        extensions: [ ".cshtml"],
        aliases: [ "Razor", "razor" ],
        mimetypes: ["text/x-cshtml"]
      },
      {
        id: "ruby",
        extensions: [ ".rb", ".rbx", ".rjs", ".gemspec", ".rake", ".ru", ".erb", ".podspec", ".rbi" ],
        filenames: [ "rakefile", "gemfile", "guardfile", "podfile", "capfile" ],
        aliases: [ "Ruby", "rb" ],
      },
      {
        id: "rust",
        extensions: [".rs"],
        aliases: ["Rust", "rust"],
      },
      {
        id: "scss",
        aliases: ["SCSS", "scss"],
        extensions: [".scss"],
        mimetypes: ["text/x-scss", "text/scss"]
      },
      {
        id: "sql",
        extensions: [ ".sql", ".dsql" ],
        aliases: [ "SQL" ],
      },
      {
        id: "shaderlab",
        extensions: [
            ".shader"
        ],
        aliases: [
            "ShaderLab",
            "shaderlab"
        ]
      },
      {
        id: "shellscript",
        aliases: ["Shell Script", "shellscript", "bash", "sh", "zsh", "ksh", "csh"],
        extensions: [
            ".sh",
            ".bash",
            ".bashrc",
            ".bash_aliases",
            ".bash_profile",
            ".bash_login",
            ".ebuild",
            ".install",
            ".profile",
            ".bash_logout",
            ".zsh",
            ".zshrc",
            ".zprofile",
            ".zlogin",
            ".zlogout",
            ".zshenv",
            ".zsh-theme",
            ".ksh",
            ".csh",
            ".cshrc",
            ".tcshrc",
            ".yashrc",
            ".yash_profile"
        ],
        filenames: [
            "APKBUILD",
            "PKGBUILD",
            ".envrc",
            ".hushlogin",
            "zshrc",
            "zshenv",
            "zlogin",
            "zprofile",
            "zlogout",
            "bashrc_Apple_Terminal",
            "zshrc_Apple_Terminal"
        ],
        firstLine: "^#!.*\\b(bash|zsh|sh|ksh|dtksh|pdksh|mksh|ash|dash|yash|sh|csh|jcsh|tcsh|itcsh).*|^#\\s*-\\*-[^*]*mode:\\s*shell-script[^*]*-\\*-",
        mimetypes: ["text/x-shellscript"]
      },
      {
        id: "swift",
        aliases: ["Swift","swift"],
        extensions: [".swift"]
      },
      {
        id: "vb",
        extensions: [ ".vb", ".brs", ".vbs", ".bas" ],
        aliases: [ "Visual Basic", "vb" ]
     },
     {
        id: "xml",
        extensions: [
            ".xml",
            ".xsd",
            ".ascx",
            ".atom",
            ".axml",
            ".bpmn",
            ".cpt",
            ".csl",
            ".csproj",
            ".csproj.user",
            ".dita",
            ".ditamap",
            ".dtd",
            ".ent",
            ".mod",
            ".dtml",
            ".fsproj",
            ".fxml",
            ".iml",
            ".isml",
            ".jmx",
            ".launch",
            ".menu",
            ".mxml",
            ".nuspec",
            ".opml",
            ".owl",
            ".proj",
            ".props",
            ".pt",
            ".publishsettings",
            ".pubxml",
            ".pubxml.user",
            ".rbxlx",
            ".rbxmx",
            ".rdf",
            ".rng",
            ".rss",
            ".shproj",
            ".storyboard",
            ".svg",
            ".targets",
            ".tld",
            ".tmx",
            ".vbproj",
            ".vbproj.user",
            ".vcxproj",
            ".vcxproj.filters",
            ".wsdl",
            ".wxi",
            ".wxl",
            ".wxs",
            ".xaml",
            ".xbl",
            ".xib",
            ".xlf",
            ".xliff",
            ".xpdl",
            ".xul",
            ".xoml"
        ],
        firstLine : "(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",
        aliases: [ "XML", "xml" ]
        },
      {
        id: "xsl",
        extensions: [
            ".xsl",
            ".xslt"
        ],
        aliases: [ "XSL", "xsl" ],
      },
      {
        id: "yaml",
        aliases: [
            "YAML",
            "yaml"
        ],
        extensions: [
            ".yml",
            ".eyaml",
            ".eyml",
            ".yaml"
        ],
        firstLine: "^#cloud-config"
      },
      {
        id: "fortran",
        aliases: [
            "Fortran - Punchcard",
            "fortran"
        ],
        extensions: [
            ".f",
            ".F",
            ".f77",
            ".F77",
            ".for",
            ".FOR",
            ".fpp",
            ".FPP"
        ]
    },
    {
        id: "fortran-modern",
        aliases: [
            "Fortran - Modern"
        ],
        extensions: [
            ".f90",
            ".F90",
            ".f95",
            ".F95",
            ".f03",
            ".F03",
            ".f08",
            ".F08"
        ]
    },
    {
        id: "dart",
        extensions: [
            ".dart"
        ],
        aliases: [
            "Dart"
        ]
    },
    {
        id: "matlab",
        aliases: [
          "MATLAB",
          "matlab"
        ],
        extensions: [
          ".m"
        ]
    },
    {
      id: "vue",
      aliases: [
        "Vue",
        "vue"
      ],
      extensions: [
        ".vue"
      ]
    },
    {
      id: "terraform",
      aliases: [
        "Terraform",
        "terraform"
      ],
      extensions: [
        ".tf"
      ]
    },
    {
      id: "terraform-vars",
      extensions: [
        ".tfvars"
      ]
    },
    {
      id: "json",
      extensions: [
        ".tfstate"
      ]
    }
  ];