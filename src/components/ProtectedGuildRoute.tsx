import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAlert } from './Alert/context';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedAuthRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { showAlert } = useAlert();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/user/guild-verify/${id}`,
          {
            credentials: "include",
          },
        );  //backend
        
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            navigate("/", { replace: true });
          }
        } else {
          setIsAuthenticated(false);
          navigate('/', { replace: true });
        }
      } catch (error) {
        showAlert(`Ошибка при проверке токена: ${error}`);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (isAuthenticated === null) {
    return <div></div>;
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedAuthRoute;