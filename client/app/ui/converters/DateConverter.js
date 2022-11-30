class DateConverter {
  constructor() {
    throw new Error("Esta classe não deve ser instanciada");
  }

  static paraTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static paraData(text) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
      throw new Error("A data deve estar no formato aaaa-mm-dd");
    }

    return new Date(
      ...text.split("-").map((item, index) => item - (index % 2))
    );
  }
}
