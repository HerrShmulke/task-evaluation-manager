export class ColorService {
  public static getBlue() {
    return '#4cb7eb';
  }

  public static getLightBlue() {
    return '#80d6ff';
  }

  public static getRed() {
    return '#c95e70';
  }

  public static getLightRed() {
    return '#ff7373';
  }

  public static getGray() {
    return '#171717';
  }

  public static getIronsideGray() {
    return '#666';
  }

  public static getBermudaGray() {
    return '#6c8694';
  }

  public static getBlack() {
    return '#080808';
  }

  public static getMilk() {
    return '#ddd';
  }

  public static getIronsideGrayRGB() {
    return '102, 102, 102';
  }

  public static setVariables(element: HTMLElement) {
    element.style.setProperty('--blue', this.getBlue());
    element.style.setProperty('--light-blue', this.getLightBlue());
    element.style.setProperty('--red', this.getRed());
    element.style.setProperty('--light-red', this.getLightRed());
    element.style.setProperty('--gray', this.getGray());
    element.style.setProperty('--black', this.getBlack());
    element.style.setProperty('--milk', this.getMilk());
    element.style.setProperty('--ironside-gray-rgb', this.getIronsideGrayRGB());
    element.style.setProperty('--ironside-gray', this.getIronsideGray());
    element.style.setProperty('--bermuda-gray', this.getBermudaGray());
  }
}
