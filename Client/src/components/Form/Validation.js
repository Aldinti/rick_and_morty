const REGEX_MAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// const REGEX_PASS = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;

export default function validate(userData, errors, setErrors) {
	// validar username
	if (!userData.username)
		setErrors({ ...errors, username: "Debes completar este campo" });
	else if (userData.username.length > 35)
		setErrors({ ...errors, username: "Máximo 35 caracteres" });
	else if (!REGEX_MAIL.test(userData.username)) {
		setErrors({ ...errors, username: "Usuario inválido" });
	} else {
		setErrors({ ...errors, username: "" });
	}

	// validar password
	if (userData.password.length < 6 || userData.password.length > 10) {
		setErrors({ ...errors, password: "Mín. 6 y Máx. 10 caracteres" });
	} else if (!/\d/.test(userData.password)) {
		setErrors({ ...errors, password: "Debe tener por lo menos un número." });
	} else {
		setErrors({ ...errors, password: "" });
	}
}
