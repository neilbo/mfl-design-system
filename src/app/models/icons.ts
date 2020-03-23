export interface IconInterface {
  label: string;
  preFix: string;
  iconName: string;
}

export interface IconItem {
  name: string;
  iconName: string;
  iconRef: Array<string>;
  url: string;
}

export const navigationIcons: IconInterface[] = [
  { label: "home", preFix: "fas", iconName: "home" },
  { label: "bookings", preFix: "far", iconName: "calendar-alt" },
  { label: "journeys", preFix: "fas", iconName: "book-open" },
  { label: "daily journals", preFix: "fas", iconName: "book" },
  { label: "images", preFix: "fas", iconName: "image" },
  { label: "observations", preFix: "fas", iconName: "eye" },
  { label: "children", preFix: "fas", iconName: "child" },
  { label: "contacts", preFix: "fas", iconName: "users" },
  { label: "centres", preFix: "fas", iconName: "store-alt" },
  { label: "billing", preFix: "fas", iconName: "file-invoice-dollar" },
  { label: "payment details", preFix: "far", iconName: "credit-card" },
  { label: "menu", preFix: "fas", iconName: "bars" },
  { label: "settings", preFix: "fas", iconName: "cog" },
  { label: "sign out", preFix: "fas", iconName: "sign-out-alt" }
];

export const calendarIcons: IconInterface[] = [
  { label: "month view", preFix: "fas", iconName: "calendar-alt" },
  { label: "week view", preFix: "fas", iconName: "calendar-week" }
];

export const authorisationIcons: IconInterface[] = [
  { label: "collection", preFix: "fas", iconName: "car" },
  { label: "excursion", preFix: "fas", iconName: "bus" },
  { label: "medical", preFix: "fas", iconName: "medkit" },
  { label: "emergency", preFix: "fas", iconName: "ambulance" }
];

export const contactMethodIcons: IconInterface[] = [
  { label: "phone", preFix: "fas", iconName: "phone" },
  { label: "email", preFix: "fas", iconName: "envelope" }
];

export const paymentMethodIcons: IconInterface[] = [
  { label: "credit card", preFix: "far", iconName: "credit-card" },
  { label: "bank details", preFix: "fas", iconName: "university" }
];

export const errorStatusIcons: IconInterface[] = [
  { label: "error", preFix: "fas", iconName: "exclamation-circle" },
  { label: "warning", preFix: "fas", iconName: "exclamation-triangle" },
  { label: "info", preFix: "fas", iconName: "info-circle" },
  { label: "success", preFix: "fas", iconName: "check-circle" }
];

export const utilityIcons: IconInterface[] = [
  { label: "go to top", preFix: "fas", iconName: "arrow-up" },
  { label: "favourite checked", preFix: "fas", iconName: "heart" },
  { label: "favourite unchecked", preFix: "far", iconName: "heart" },
];

export const bookingStatusIcons: IconInterface[] = [
  {
    label: "book available session",
    preFix: "fas",
    iconName: "calendar-check"
  },
  { label: "cancel session", preFix: "fas", iconName: "calendar-times" },
  { label: "mark session as absent", preFix: "fas", iconName: "user-slash" },
  { label: "contact centre", preFix: "fas", iconName: "address-book" }
];

export const crudIcons: IconInterface[] = [
  { label: "create (add)", preFix: "fas", iconName: "plus" },
  { label: "update (edit)", preFix: "fas", iconName: "edit" },
  { label: "delete", preFix: "fas", iconName: "trash" },
];

export default function composeIconList(icons: IconInterface[]): IconItem[] {
  return icons.map(i => {
    return buildIconItem(i);
  });
}

export function convertPreFixToStyle(preFix: string): string {
  switch (preFix) {
    case "fas":
      return "solid";
    case "far":
      return "regular";
    case "fab":
      return "brand";
    default:
      return "solid";
  }
}

export function buildIconItem(icon: IconInterface): IconItem {
  const style: string = convertPreFixToStyle(icon.preFix);
  return {
    name: icon.label,
    iconName: icon.iconName,
    iconRef: [icon.preFix, icon.iconName],
    url: `https://fontawesome.com/icons/${icon.iconName}?style=${style}`
  };
}
