function findCommonCourses(courses1, courses2) {
    return courses1.filter(course => courses2.includes(course));
}
