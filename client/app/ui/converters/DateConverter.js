class DateConverter {
  paraTexto(data) {
    return (
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
    );
  }

  paraData(text) {
    return new Date(
      ...text.split("-").map((item, index) => item - (index % 2))
    );
  }
}
