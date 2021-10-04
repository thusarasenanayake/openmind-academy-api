function Student(data) {
  this.ID = data.ID;
  this.name = data.name;
  this.courseID = data.courseID;
  this.address = {
    line1: data.address.line1,
    line2: data.address.line2,
    line3: data.address.line3 || '',
    city: data.address.city,
  };

  this.address['city'] = data.address.city;
  this.phone = data.phone;
  this.email = data.email;
}

module.exports = Student;
