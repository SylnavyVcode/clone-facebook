import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Si tu utilises React Router
import { ActionFeedback, AlertFeedback } from '../components/FeedbackComponent';
import { Button } from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Label } from '../components/ui/label';
import { Icons } from '../components/ui/icons';

export const feedbackSchema = z.object({
  message: z.string(),
  error: z.boolean(),
});

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Votre adresse email est requise.' })
    .email({ message: 'Vous devez fournir une adresse email valide' }),
});

const resetPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Le mot de passe doit faire plus de 6 caractères',
  }),
  passwordConfirmation: z.string().min(6, {
    message: 'Le mot de passe doit faire plus de 6 caractères',
  }),
});

export default function ForgotPasswordForm() {
  const [searchParams] = useSearchParams(); // récupère le token de l’URL
  const [feedback, setFeedback] = useState<ActionFeedback | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [tokenStatus, setTokenStatus] = useState<{
    error: boolean;
    message: string;
    token: string;
  } | null>(null);
  const navigate = useNavigate();

  // 1. Vérifie la validité du token au montage
  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/verify-reset-password-token?token=${token}`)
        .then((res) => res.json())
        .then((data) => {
          const result = feedbackSchema.safeParse(data);
          if (result.success) {
            setTokenStatus({ ...result.data, token });
          } else {
            setTokenStatus({ error: true, message: 'Token invalide.', token: '' });
          }
        })
        .catch((err) => {
          setTokenStatus({ error: true, message: err.message, token: '' });
        });
    } else {
      setTokenStatus({ error: false, message: '', token: '' });
    }
  }, [searchParams]);

  const handleRequestPasswordReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

    const parsed = forgotPasswordSchema.safeParse({ email });
    if (!parsed.success) {
      setFeedback({
        error: true,
        message: parsed.error.issues.map((e) => e.message).join(', '),
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/request-reset-password`,
        {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      const result = feedbackSchema.safeParse(data);
      if (result.success) {
        setFeedback(result.data);
      } else {
        setFeedback({ error: true, message: 'Erreur inattendue' });
      }
    } catch (err: any) {
      setFeedback({ error: true, message: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const password = formData.get('password') as string;
    const passwordConfirmation = formData.get('passwordConfirmation') as string;

    const parsed = resetPasswordSchema.safeParse({ password, passwordConfirmation });

    if (!parsed.success) {
      setFeedback({
        error: true,
        message: parsed.error.issues.map((e) => e.message).join(', '),
      });
      return;
    }

    if (password !== passwordConfirmation) {
      setFeedback({
        error: true,
        message: 'Les mots de passe ne correspondent pas.',
      });
      return;
    }

    try {
      setLoading(true);
      const token = searchParams.get('token');

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/reset-password`,
        {
          method: 'POST',
          body: JSON.stringify({ password, token }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      const result = feedbackSchema.safeParse(data);
      if (result.success) {
        setFeedback(result.data);
        if (!result.data.error) {
          setTimeout(() => {
            navigate('/login'); // redirection après succès
          }, 3000);
        }
      } else {
        setFeedback({ error: true, message: 'Erreur inattendue.' });
      }
    } catch (err: any) {
      setFeedback({ error: true, message: err.message });
    } finally {
      setLoading(false);
    }
  };

  if (!tokenStatus) return <p>Chargement...</p>;

  // Formulaire : demande d’email
  if (!tokenStatus.token) {
    return (
      <div className='container flex-col items-center justify-center'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='text-center space-y-2'>
            <h1 className='text-2xl font-semibold'>Récupération du mot de passe</h1>
            <p className='text-sm text-muted-foreground'>Récupérez votre mot de passe</p>
          </div>
          <form className='grid gap-6' onSubmit={handleRequestPasswordReset}>
            <div className='grid gap-2'>
              <Label htmlFor='email' className='sr-only'>
                Email
              </Label>
              <Input
                id='email'
                name='email'
                placeholder='Adresse email'
                type='email'
                required
                disabled={loading}
              />
              <AlertFeedback feedback={feedback} />
              <Button disabled={loading}>
                {loading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
                Récupérer mon mot de passe
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Token invalide
  if (tokenStatus.token && tokenStatus.error) {
    return (
      <>
        <AlertFeedback feedback={tokenStatus} />
        <Button variant='ghost' onClick={() => navigate('/')}>
          Retourner à l’accueil
        </Button>
      </>
    );
  }

  // Formulaire : reset du mot de passe
  return (
    <div className='container flex-col items-center justify-center'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='text-center space-y-2'>
          <h1 className='text-2xl font-semibold'>Choisissez votre nouveau mot de passe</h1>
        </div>
        <form className='grid gap-6' onSubmit={handleResetPassword}>
          <div className='grid gap-2'>
            <Label htmlFor='password' className='sr-only'>
              Mot de passe
            </Label>
            <Input
              id='password'
              name='password'
              placeholder='Nouveau mot de passe'
              type='password'
              required
              disabled={loading}
            />
            <Label htmlFor='passwordConfirmation' className='sr-only'>
              Confirmation de mot de passe
            </Label>
            <Input
              id='passwordConfirmation'
              name='passwordConfirmation'
              placeholder='Confirmation du mot de passe'
              type='password'
              required
              disabled={loading}
            />
            <AlertFeedback feedback={feedback} />
            <Button disabled={loading}>
              {loading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
              Réinitialiser mon mot de passe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
