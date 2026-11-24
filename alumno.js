Vue.createApp({
    data() {
        return {
            nombre: '',
            edad: null,
            especialidad: '',
            alumnos: []
        };
    },

    methods: {
        registrarAlumno() {
            if (!this.nombre || !this.edad || !this.especialidad) {
                alert('Por favor, complete todos los campos antes de registrar al alumno');
                return;
            }

            this.alumnos.push({
                nombre: this.nombre,
                edad: this.edad,
                especialidad: this.especialidad
            });

            this.nombre = '';
            this.edad = null;
            this.especialidad = '';
        }
    }
}).mount('#app');
