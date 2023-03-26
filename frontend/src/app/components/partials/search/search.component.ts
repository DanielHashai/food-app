import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchTerm = "";
  public constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    
  }
  ngOnInit(): void {
    // we this down here in order to update each time the input search field value
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.searchTerm = params.searchTerm;
    })
  }
  public search(term: string):void {
    if (term) {
      this.router.navigateByUrl("/search/" + term);
  }
}



}
