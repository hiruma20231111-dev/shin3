"use client";

import { useState, type FormEvent } from "react";
import { MENU_COURSES } from "@/constants/salonData";

// ネイティブ HTML5 Constraint Validation API でクライアントサイドバリデーション。
// react-hook-form等は使用しない。送信は擬似（モック）で、UIのみ完了表示する。

type FieldErrors = {
  name?: string;
  email?: string;
  tel?: string;
};

const PHONE_DIGITS_REGEX = /^[0-9]+$/;

export function ReservationForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (form: HTMLFormElement): FieldErrors => {
    const data = new FormData(form);
    const next: FieldErrors = {};

    const name = String(data.get("name") ?? "").trim();
    if (!name) next.name = "お名前を入力してください。";

    const email = String(data.get("email") ?? "").trim();
    const emailField = form.elements.namedItem("email");
    // checkValidity で type="email" のバリデーションを利用
    if (!email) {
      next.email = "メールアドレスを入力してください。";
    } else if (emailField instanceof HTMLInputElement && !emailField.checkValidity()) {
      next.email = "メールアドレスの形式が正しくありません。";
    }

    // 電話番号は半角数字のみ。ハイフン無しで入力させる前提。
    const tel = String(data.get("tel") ?? "").trim();
    if (!tel) {
      next.tel = "電話番号を入力してください。";
    } else if (!PHONE_DIGITS_REGEX.test(tel)) {
      next.tel = "電話番号は半角数字のみで入力してください（ハイフン不要）。";
    }

    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // モック送信：実APIには接続しない。完了UIに切り替えるのみ。
      setIsSubmitted(true);
      form.reset();
    }
  };

  if (isSubmitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-luxe border border-lumiere-accent bg-lumiere-bg p-8 text-center dark:bg-lumiere-bg-dark/40"
      >
        <p className="font-script text-3xl text-lumiere-accent">Thank you</p>
        <h3 className="mt-2 font-serif text-xl text-lumiere-text dark:text-lumiere-text-dark">
          ご予約リクエストを受け付けました
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-lumiere-secondary">
          1営業日以内に担当者よりご連絡いたします。
          <br />
          お急ぎの場合はLINEまたはお電話にてご連絡ください。
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-sm text-lumiere-accent underline-offset-4 hover:underline"
        >
          もう一度フォームを開く
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-label="初回体験の予約フォーム"
      className="space-y-5 rounded-luxe border border-lumiere-secondary/30 bg-lumiere-bg p-6 dark:bg-lumiere-bg-dark/40 md:p-8"
    >
      <FormField
        id="reservation-name"
        label="お名前"
        name="name"
        type="text"
        required
        autoComplete="name"
        error={errors.name}
      />
      <FormField
        id="reservation-email"
        label="メールアドレス"
        name="email"
        type="email"
        required
        autoComplete="email"
        error={errors.email}
      />
      <FormField
        id="reservation-tel"
        label="電話番号（ハイフン無し）"
        name="tel"
        type="tel"
        inputMode="numeric"
        pattern="[0-9]+"
        required
        autoComplete="tel"
        error={errors.tel}
      />

      <div>
        <label
          htmlFor="reservation-course"
          className="mb-2 block font-serif text-sm text-lumiere-text dark:text-lumiere-text-dark"
        >
          ご希望のコース
        </label>
        <select
          id="reservation-course"
          name="course"
          defaultValue=""
          className="w-full rounded-luxe border border-lumiere-secondary/40 bg-lumiere-bg px-4 py-3 text-sm text-lumiere-text focus:border-lumiere-accent focus:outline-none dark:bg-lumiere-bg-dark/50 dark:text-lumiere-text-dark"
        >
          <option value="">初回体験 ¥6,600（おすすめ）</option>
          {MENU_COURSES.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name}（¥{course.priceYen.toLocaleString()}）
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="reservation-message"
          className="mb-2 block font-serif text-sm text-lumiere-text dark:text-lumiere-text-dark"
        >
          ご要望・ご質問（任意）
        </label>
        <textarea
          id="reservation-message"
          name="message"
          rows={4}
          className="w-full rounded-luxe border border-lumiere-secondary/40 bg-lumiere-bg px-4 py-3 text-sm text-lumiere-text focus:border-lumiere-accent focus:outline-none dark:bg-lumiere-bg-dark/50 dark:text-lumiere-text-dark"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-luxe bg-gradient-to-r from-lumiere-secondary to-lumiere-accent px-6 py-4 font-serif tracking-wider text-lumiere-bg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lumiere-accent"
      >
        予約リクエストを送信する
      </button>

      <p className="text-center text-xs text-lumiere-secondary">
        ※こちらはデモフォームです。送信内容は実際には保存されません。
      </p>
    </form>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  name: string;
  type: "text" | "email" | "tel";
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "numeric" | "email" | "tel";
  pattern?: string;
  error?: string;
};

function FormField({
  id,
  label,
  name,
  type,
  required,
  autoComplete,
  inputMode,
  pattern,
  error,
}: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-serif text-sm text-lumiere-text dark:text-lumiere-text-dark"
      >
        {label}
        {required && <span className="ml-1 text-lumiere-accent">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        pattern={pattern}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={`w-full rounded-luxe border bg-lumiere-bg px-4 py-3 text-sm text-lumiere-text focus:outline-none dark:bg-lumiere-bg-dark/50 dark:text-lumiere-text-dark ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-lumiere-secondary/40 focus:border-lumiere-accent"
        }`}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
