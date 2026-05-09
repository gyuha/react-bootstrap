import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import { mockLogin, mockSignup } from '../lib/mock-auth-api';
import { useAuthStore } from '../store/auth.store';
import type { LoginInput, SignupInput } from '../types/auth';

export function useLoginMutation() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data: LoginInput) => mockLogin(data),
    onSuccess: (response) => {
      setUser(response.user);
      navigate({ to: '/' });
    },
  });
}

export function useSignupMutation() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: SignupInput) => mockSignup(data),
    onSuccess: () => {
      toast.success('가입이 완료되었습니다!');
      // Step 5에서 /auth/login 라우트가 추가될 때까지 placeholder 라우트 트리에서는 미등록 경로
      navigate({ to: '/auth/login' as '/' });
    },
  });
}
