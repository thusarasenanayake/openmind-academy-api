function Student(data) {
  data.ID ? (this.ID = data.ID) : false;
  data.name ? (this.name = data.name) : false;
  data.courseID ? (this.courseID = data.courseID) : false;

  this.address = {};
  if (data.address.line1) this.address.line1 = data.address.line1;
  if (data.address.line2) this.address.line2 = data.address.line2;
  if (data.address.line3) this.address.line3 = data.address.line3;
  if (data.address.city) this.address.city = data.address.city;

  data.address.city ? (this.address['city'] = data.address.city) : false;
  data.phone ? (this.phone = data.phone) : false;
  data.email ? (this.email = data.email) : false;
}

module.exports = Student;
