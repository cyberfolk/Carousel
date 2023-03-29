/**
 * Image Class
 */
export class Image {
  /**
   * Image Contructor
   * @param {String} image The image src
   * @param {String} title The image title
   * @param {String} text The image description
   */
  constructor(image, title, text) {
    this.image = image
    this.title = title
    this.text = text
  }
}