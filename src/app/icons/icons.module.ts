import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import {
  Grid,
  Calendar,
  LogOut,
  User,
  Settings,
  ShoppingBag,
  CheckCircle,
  XCircle,
  X,
  Edit,
  Trash2,
  
} from 'angular-feather/icons';
const icons = {
  Grid,
  Calendar,
  LogOut,
  Settings,
  User,
  ShoppingBag,
  CheckCircle,
  XCircle,
  X,
  Trash2,
  Edit,
};

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons), CommonModule],
  exports: [FeatherModule],
})
export class IconsModule {}
