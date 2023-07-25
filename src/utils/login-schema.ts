import { z } from 'zod'

export const signInForm = z.object({
  email: z
    .string()
    .toLowerCase()
    .nonempty('Email obrigatório')
    .email('Email inválido')
    .max(254, 'Máximo de 254 caracteres permitidos'),
  password: z
    .string()
    .nonempty('Senha obrigatória')
    .regex(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/,
      'A senha deve conter: Pelo menos 8 caracteres, uma letra maiúscula, um caractere especial (!@#$&*)'
    )
})

export const registerForm = z.object({
  fullName: z
    .string()
    .nonempty('Nome Completo obrigatório')
    .min(12, 'Mínimo de 12 caracteres obrigatórios')
    .max(150, 'Máximo de 150 caracteres permitidos'),

  email: z
    .string()
    .toLowerCase()
    .nonempty('Email obrigatório')
    .email('Email inválido')
    .max(254, 'Máximo de 254 caracteres permitidos'),

  password: z
    .string()
    .nonempty('Senha obrigatória')
    .regex(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/,
      'A senha deve conter: Pelo menos 8 caracteres, uma letra maiúscula, um caractere especial (!@#$&*)'
    ),

  terms: z
    .boolean()
    .refine((value) => value === true, { message: 'Você deve marcar a caixa de termos de uso' })
})

export type SignInFormProps = z.infer<typeof signInForm>

export type RegisterFormProps = z.infer<typeof registerForm>
