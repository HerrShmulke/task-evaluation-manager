export class ColorService {
  static getBlue() {
    return '#4cb7eb';
  }

  static getLightBlue() {
    return '#80d6ff';
  }

  static getRed() {
    return '#c95e70';
  }

  static getLightRed() {
    return '#ff7373';
  }

  static getGray() {
    return '#171717';
  }

  static getIronsideGray() {
    return '#666';
  }

  static getBermudaGray() {
    return '#6c8694';
  }

  static getBlack() {
    return '#080808';
  }

  static getMilk() {
    return '#ddd';
  }

  static getIronsideGrayRGB() {
    return '102, 102, 102';
  }

  static setVariables(element: HTMLElement) {
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
