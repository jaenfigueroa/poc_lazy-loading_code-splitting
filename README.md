## ⚙️ Herramientas configuradas

### 1. ESLint y Prettier

- Utiliza [ESLint](https://eslint.org/) para mantener la calidad del código y asegurarte de que siga las convenciones de estilo.
- Integra [Prettier](https://prettier.io/docs/en/) para el formateo consistente y profesional del código.

### 2. EditorConfig

- Utiliza [EditorConfig](https://editorconfig.org/) para mantener la consistencia del estilo de codificación entre diferentes editores e IDEs.

### 3. Husky y Lint-Staged

- Emplea [Husky](https://typicode.github.io/husky/) para ejecutar scripts pre-commit que ejecuten acciones automáticamente antes de confirmar cambios en git.
- Utiliza [lint-staged](https://github.com/okonet/lint-staged) para ejecutar ESLint y Prettier solo en los archivos modificados antes de confirmar cambios en git.

### 4. Commitlint

- Utiliza [Commitlint](https://www.conventionalcommits.org/es/v1.0.0/) para asegurar mensajes de confirmación estructurados y coherentes que sigan un formato.

### 5. Entorno de pruebas

- [Vitest](https://vitest.dev/guide/) para ejecutar pruebas unitarias.
- [Jsdom](https://www.npmjs.com/package/jsdom) para simular un entorno de navegador en Node.js.
- [React testing library](https://testing-library.com/docs/react-testing-library/intro) para facilitar los tests de pruebas unitarias para componentes.

## 💡 Uso

### Instalar las dependencias

```
pnpm i
```

### Correr el proyecto en modo desarrollo

```
pnpm dev
```

### Correr los test

- Desde la terminal

```
pnpm test
```

- Desde la interfaz gráfica

```
pnpm test-ui
```

### Ver la cobertura de los test

```
pnpm coverage
```
