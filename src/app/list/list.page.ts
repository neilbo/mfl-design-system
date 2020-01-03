import { Component, OnInit } from "@angular/core";
import composeStatusLabel, { SessionStatus, Session } from "../models/session"

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})

export class ListPage implements OnInit {
  title: string = "List";
  private selectedItem: any;
  private icons = [
    "flask",
    "wifi",
    "beer",
    "football",
    "basketball",
    "paper-plane",
    "american-football",
    "boat",
    "bluetooth",
    "build"
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  public contacts: Array<{
    name: string;
    type?: string;
    kioskStatus?: string;
  }> = [
    {
      name: "Reed Richards",
      type: "primary contact"
    },
    {
      name: "Susan Storm",
      type: "secondary contact"
    },
    {
      name: "Johnny Storm"
    },
    {
      name: "Benjamin Grimm"
    },
    {
      name: "Victor Von Doom",
      kioskStatus: "Must not collect"
    }
  ];
  public familyServiceAccounts: Array<{
    familyName: string;
    centreName: string;
  }> = [
    {
      familyName: "Reed Richards",
      centreName: "Shawarma Day Care"
    },
    {
      familyName: "Reed Richards",
      centreName: "Baxter Day Care"
    },
    {
      familyName: "Reed Richards",
      centreName: "S.H.I.E.LD. Day Care"
    }
  ];

  public sessions: Array<Session> = [
    {firstName: 'Franklin', rollName: 'Before School', status: SessionStatus['bookedCanMarkAbsent']},
    {firstName: 'Franklin', rollName: 'After School', status: SessionStatus['available']},
    {firstName: 'Valeria', rollName: 'Before School', status: SessionStatus['bookedCanCancel']},
    {firstName: 'Valeria', rollName: 'After School', status: SessionStatus['available']},
    {firstName: 'Mary', rollName: 'Daycare', status: SessionStatus['absent']},
  ]
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: "Item " + i,
        note: "This is item #" + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  isBooked(session: Session): boolean {
    return session.status === 'bookedCanCancel' || session.status === 'bookedCanMarkAbsent'
  }

  canMarkAbsent(session: Session): boolean {
    return session.status === 'bookedCanMarkAbsent'
  }

  canCancel(session: Session): boolean {
    return session.status === 'bookedCanCancel';
  }

  isAvailable(session: Session): boolean {
    return session.status === 'available';
  }

  isAbsent(session: Session): boolean {
    return session.status === 'absent';
  }

  ngOnInit() {
    console.dir(this.sessions)
  }

  statusLabel(session: Session): string {
    return composeStatusLabel(session);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

}
