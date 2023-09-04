import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HotColdService } from 'src/app/services/hot-cold.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit  {
  user$: Observable<{id: number, name: string}> = this._coldhotService.getUsers();
  //user1$ = new Subject<{id: number, name: string}>();
  user1: {id: number, name: string};
  user2: {id: number, name: string};
  user3: {id: number, name: string};

  teaserstack = {
    columnCount: 3,
    layout: 'layout-1',
    title: 'Science articles header',
    description: 'Description test',
    teasers: [
      {
        imageUrl:
          'https://media.istockphoto.com/photos/nyhavn-copenhagen-denmark-picture-id901375804?k=20&m=901375804&s=612x612&w=0&h=LjDZ-dPGoCVU-xy-A4TyU8y6amshakYf5uTPWIKU5e8=',
        header: 'How customers won’t feel alone',
        description:
          'Starbucks uses round tables specifically so customers won’t feel alone. The lack of edges makes it seem less like people are missing. The lack of edges makes it seem less like people are missing.',
        border: '1px solid #DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
      {
        imageUrl:
          'http://ekkotek.com/MobileApps/youtubeApi/examples/images/Swan_large.jpg',
        header: 'The best known brand in the world',
        description:
          'The Coca-Cola logo can be recognized by 94 percent of the world’s population',
        border: '1px solid #DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
      {
        imageUrl:
          'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/9154/1655441194954/front-left-side-47.jpg?tr=w-375',
        header: 'Tuesday',
        description:
          'On average the most productive day of the workweek is Tuesday',
        border: '1px solid #DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1551651767-d5ffbdd04b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29wZW5oYWdlbnxlbnwwfHwwfHw%3D&w=1000&q=80',
        header: "The Meaning Behind Yahoo's Full Name",
        description:
          "Yahoo stands for 'Yet Another Hierarchical Officious Oracle.' Learn more about the meaning of Yahoo and how it became a household name.'",
        border: '1px solid #DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
      {
        imageUrl:
          'https://cdn.theatlantic.com/media/img/photo/2020/11/montana-photos/a01_23355789779-1/original.jpg',
        header: 'Ah Ikea, how we love you so',
        description: 'One in 10 Europeans are conceived in an Ikea bed',
        border: '1px solid #DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
      {
        imageUrl:
          'https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg',
        header: 'Google was originally called BackRub',
        description:
          'Google cofounders Larry Page and Sergey Brin are definitely fans of wordplay, and they seem to have a thing for company names that are both goofy and yet significant at the same time.',
        border: '1px solid #DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
    ],
  };

  ngOnInit(): void {
    this.user$.subscribe(data => this.user1 = data);
    this.user$.subscribe(data => this.user2 = data);
    this.user$.subscribe(data => this.user3 = data);

    const teaserstck1 = {
      columnCount: 31,
    layout: 'layout-1',
    title: 'Science articles header',
    description: 'Description test',
    teasers: this.teaserstack.teasers.map((t,i)=> {
      const override = (() => {
        if(i === 0){
          console.log('first')
          return {
            border:false,
            backgroundColor: 'green',
            textColor: 'red',
            borderColor: 'purple',
          }
        }
        if(i === 1){
          console.log('first')
          return {
            border:'bal',
            backgroundColor: 'sudhan',
            textColor: 'resham',
            borderColor: 'biren',
          }
        }
        return {}

      })();
      return {
        ...t,
        ...override,
      }
    })
    .map((teaser, index)=>{
      if(index % 2){
        return {
          ...teaser,
          layout: 'some layout'
        }
      }
      return teaser;
    })
    }
    console.log(teaserstck1);
  }

  constructor(private _coldhotService: HotColdService){}


}
