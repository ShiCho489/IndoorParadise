const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }, 
        password: {
            type: String,
            required: true,
        }, 
        isAdmin: {
            type: Boolean,
            required: true,
        }, 
    }, {
        timestamps: true
    }
)

const User