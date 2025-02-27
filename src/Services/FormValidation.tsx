const SignUpValidation = (name: string, value: string) => {
    switch (name) {
        case 'name':
            if (value.length === 0)
                return ("Name is required");
            return "";
        case 'email':
            if (value.length === 0)
                return ("Email is required");
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
                return "Invalid email";
            }
            return "";
        case 'password':
            if (value.length === 0)
                return ("Password is required");
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/.test(value)) {
                return "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one symbol";
            }
            return "";

        default:
            return "";
    }

}

const LoginValidation = (name: string, value: string) => {
    switch (name) {
        case 'email':
            if (value.length === 0)
                return ("Email is required");
            return "";
        case 'password':
            if (value.length === 0)
                return ("Password is required");
            return "";

        default:
            return "";
    }

}

export { SignUpValidation, LoginValidation };