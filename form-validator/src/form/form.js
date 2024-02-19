import { useForm } from "react-hook-form";
export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} noValidate>
      <h3>Sign Up!</h3>
      <div>
        <label htmlFor="email">Email</label>
      </div>
      <div>
        <input
          id="email"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
      </div>
      <div>
        <input
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password length should be alteast 8",
            },
          })}
          type="password"
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password</label>
      </div>
      <div>
        <input
          id="confirm-password"
          {...register("confirm_password", {
            required: "Confirm password is required",

            // for confirm password validation can use both Method 1:  using getValues() and Method 2: using watch
            //Method 1
            // validate: (value) => {
            //     const { password } = getValues();
            //     return password === value || "Passwords should match!";
            //   }
            //Method 2
            validate: (val) => {
              if (watch("password") !== val) {
                return "Your password do not match";
              }
            },
          })}
          type="password"
        />
        {errors.confirm_password && (
          <span role="alert">{errors.confirm_password.message}</span>
        )}
      </div>
      <input type="submit" />
    </form>
  );
};
