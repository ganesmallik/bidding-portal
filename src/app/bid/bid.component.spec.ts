import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidComponent } from './bid.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('BidComponent', () => {
  let component: BidComponent;
  let fixture: ComponentFixture<BidComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidComponent ],
      imports:[ FormsModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
