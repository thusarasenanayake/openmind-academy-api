function Course(data) {
  data.ID ? (this.ID = data.ID) : false;
  data.name ? (this.name = data.name) : false;
  data.credits ? (this.credits = data.credits) : false;
  if (data.lectures.length > 0) {
    this.lectures = data.lectures;
  }
}

module.exports = Course;
