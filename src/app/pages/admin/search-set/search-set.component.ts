import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchSetService } from './services/search-set.service';
import { environment } from '../../../../environments/environment';
import { ModalComponent } from '../../../components/modal/modal.component';

@Component({
  selector: 'app-search-set',
  templateUrl: './search-set.component.html',
  styleUrls: ['./search-set.component.scss']
})
export class SearchSetComponent implements OnInit {
  loading = false;
  showModal = false;
  videoSrc = '';

  @ViewChild(ModalComponent) private modalComponent: ModalComponent;

  constructor(public searchSetService: SearchSetService) { }

  ngOnInit() {
    this.loading = true;
    this.searchSetService.initialize()
      .then(() => {
        this.loading = false;
      })
      .catch(this.handleError);
  }

  onSearch($event) {
    console.log(1);
  }

  onPerPageSelection($event) {
    console.log(2);
  }

  onPaginationClick(): void {
    console.log(4);
  }

  onSelected(id: number) {
    this.loading = true;
    this.searchSetService.getById(id)
      .then(() => {
        this.loading = false;
      })
      .catch(this.handleError);
  }

  onPathClick(path: string) {
    this.videoSrc = `${environment.fileStoreRoot}${path}`;
    this.modalComponent.open();
  }

  private handleError(): void {
    this.loading = false;
  }
}
