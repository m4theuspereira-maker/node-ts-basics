import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document{
  id?:string,
  email?: string,
  firstName?: string,
  lastName?: string,
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
