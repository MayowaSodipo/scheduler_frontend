const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export function getRelativeDate(date: string): string {
    const newDate=new Date(date)
    const currentDate = new Date();
    const timeDifference =currentDate.getTime() - newDate.getTime();
    
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    
    if (seconds < 60 && seconds>0) {
      return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    } else if (minutes < 60 && seconds>0){
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (hours < 24 && hours>0) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (days < 30 && days>0) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (months < 12 && months>0) {
      return `${months} month${months === 1 ? '' : 's'} ago`;
    } else {
      return `${monthNames[newDate.getMonth()]} ${newDate.getDate()} , ${newDate.getFullYear()}`;
    }
  }
  