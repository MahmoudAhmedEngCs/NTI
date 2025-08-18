import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id?: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'CRUD in Angular';

  users: User[] = [
   
  ];

  newUser: User = { name: '', email: '' };
  editUser:  User = { id: 0, name: '', email: '' };

  addUser() {
    const newId = this.users.length ? Math.max(...this.users.map(u => u.id || 0)) + 1 : 1;
    this.users.push({ id: newId, ...this.newUser });
    this.newUser = { name: '', email: '' };
  }

  startEdit(user: User) {
    this.editUser = { ...user };
  }

  updateUser() {
    if (this.editUser?.id) {
      const index = this.users.findIndex(u => u.id === this.editUser?.id);
      if (index > -1) this.users[index] = this.editUser;
     this.editUser = { id: 0, name: '', email: '' };
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
