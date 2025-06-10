import { z } from "zod";

export const validationSchema = z.object({
  name: z
    .string()
    .nonempty("お名前の入力は必須です")
    .max(30, "30文字以内ににしてください"),
  email: z
    .string()
    .nonempty("メールアドレスの入力は必須です")
    .email("正しいメールアドレスを入力してください"),
  content: z
    .string()
    .nonempty("本文の入力は必須です")
    .max(500, "500文字以内ににしてください"),
});
