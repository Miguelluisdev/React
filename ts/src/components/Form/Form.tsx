import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Handle form submission here
    console.log(formData);

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form className="container mx-auto mt-10 flex flex-col w-full max-w-md px-8 py-6 rounded-lg shadow-md bg-white" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center">Mande um email, como nos velhos tempos</h2>
      <p className="text-center mb-8">
        Gosto muito de interagir com programadores, criadores e estudantes da tecnologia. Seja para um bate-papo, trabalho ou
        queira dar um feedback sobre este website, vamos trocar um papo.
      </p>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-blue-500 focus:ring-opacity-75 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Ex: Peter Parker"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-blue-500 focus:ring-opacity-75 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Ex: peterparker@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-blue-500 focus:ring-opacity-75 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Escreva sobre o assunto"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
