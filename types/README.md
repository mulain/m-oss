# @moss/types

Shared TypeScript types and validation schemas for DocPille frontend and backend.

## Installation

```bash
npm install @moss/types
```

## Usage

```typescript
import { User, Doctor, Patient, loginSchema } from '@m-oss/types'

// Use types
const user: User = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  // ...
}

// Use validation schemas
const result = loginSchema.safeParse({
  email: 'john@example.com',
  password: 'password123',
})
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Build: `npm run build`

## Publishing

1. Update version in `package.json`
2. Run `npm publish`

## License

MIT
