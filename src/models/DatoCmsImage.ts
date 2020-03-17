interface DatoCmsImage {
  id: number,
  url: string,
  title?: string,
  width: number,
  height: number,
  format: string,
  filename: string,
  tags: string[],
}

export default DatoCmsImage;
