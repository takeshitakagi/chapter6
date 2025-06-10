import { useState } from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      content: ""
    },
    resolver: zodResolver(validationSchema)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    setApiError(null);

    console.log("送信データ:", data);

    try {
      const apiUrl = "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts";

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorDetail = await response.json();
        throw new Error(errorDetail.message || `APIリクエスト失敗!： ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setSubmitMessage("お問合せが正常に送信されました");
      console.log("APIからの応答:", result);

      reset();

    } catch (err) {
      console.error("お問合せフォームの送信中にエラーが発生しました：", err);
      setApiError(`送信中にエラーが発生しました： ${err.message}`);
      setIsSubmitting(false);
    }
  };

  if (submitMessage) {
    alert(submitMessage);
  };

  if (apiError) {
    alert(apiError);
  };


  const handleReset = () => {
    reset();
    setSubmitMessage(null);
    setApiError(null);
  }


  return (

    <>
    <div class='text-gray-600'>
        <h1 class='max-w-3xl pl-5 text-xl mt-10 mx-auto'>お問い合わせフォーム</h1>
        <form class='max-w-3xl p-5 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
          <div class='flex mb-6 items-center'>
            <label htmlFor="name" class='block w-1/4 text-left mb-1 pr-4'>名前</label>
            <div class='w-3/4'>
              <input class='block w-full py-2 px-3 text-gray-700 border border-gray-400 rounded focus:border-2 focus:border-sky-500'
                type="text"
                id="name"
                name="name"
                placeholder="名前"
                {...register("name")}
                disabled={isSubmitting} />
              <div class='block text-red-500 text-sm mt-2'>{errors.name?.message}</div>
            </div>
          </div>
          <div class='flex mb-6 items-center max-w-6xl'>
            <label htmlFor="email" class='block w-1/4 text-left mb-1 pr-4'>メールアドレス</label>
            <div class='w-3/4'>
              <input class='block w-full py-2 px-3 text-gray-700 border border-gray-400 rounded focus:border-2 focus:border-sky-500'
                type="text"
                id="email"
                name="email"
                placeholder="メールアドレス"
                {...register("email")}
                disabled={isSubmitting} />
              <div class='block text-red-500 text-sm mt-2'>{errors.email?.message}</div>
            </div>
          </div>
          <div class='flex mb-6 items-center'>
            <label htmlFor="content" class='block w-1/4 text-left mb-1 pr-4'>本文</label>
            <div class='w-3/4'>
              <textarea class='block w-full py-2 px-3 text-gray-700 border border-gray-400 rounded focus:border-2 focus:border-sky-500'
                id="content"
                rows="10"
                name="content"
                {...register("content")}
                disabled={isSubmitting} />
              <div class='block text-red-500 text-sm mt-2'>{errors.content?.message}</div>

            </div>
          </div>
          <div class='flex justify-center space-x-5'>
            <button
              type="submit"
              disabled={isSubmitting}
              class='bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded'>{isSubmitting ? '送信中...' : '送信'}</button>
            <button
              type="button"
              onClick={handleReset}
              class='bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded'>クリア</button>
          </div>
          </form>
    </div>
    </>

  );
}
export default Contact;
