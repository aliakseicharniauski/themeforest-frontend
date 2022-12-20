import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "@utils/auth/authSlice";
import { LoginRequest, useLoginMutation } from "@utils/auth/api";

function PasswordInput({
  name,
  onChange,
}: {
  name: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter password"
        name={name}
        onChange={onChange}
      />
      <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = React.useState<LoginRequest>({
    username: "",
    password: "",
  });

  const [login, { isLoading }] = useLoginMutation();
  console.log("isLoading", isLoading);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  return (
    <div>
      <div>
        <div>Hint: enter anything, or leave it blank and hit login</div>
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Email"
        />
        <PasswordInput onChange={handleChange} name="password" />
        <button
          onClick={async () => {
            try {
              const user = await login(formState).unwrap();
              dispatch(setCredentials(user));
              navigate("/");
            } catch (err) {
              console.log("LOGIN ERROR");
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
