import { Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle} from '@angular/material/dialog';

@Component({
  selector: 'app-renda-fixa-delete-dialog',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './renda-fixa-delete-dialog.component.html',
  styleUrl: './renda-fixa-delete-dialog.component.scss'
})
export class RendaFixaDeleteDialogComponent {
}
