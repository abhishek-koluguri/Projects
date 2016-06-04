User.delete_all
Presentation.delete_all
Discussion.delete_all

sam = User.create(first_name: "Sam", last_name: "Wise", email: "samwiseexample1@example1.com")
marge = User.create(first_name: "Marge", last_name: "Simpson", email: "margesimpsonexample2@example2.com")
paul = User.create(first_name: "Paul", last_name: "Miller", email: "paulmillerexample3@example3.com")
presenter1 = User.create(first_name: "Obinna", last_name: "Ugwuzor", email: "ougwuzor@gmail.com")
first_presentation = Presentation.create(presentation_title: "Jack Samson", user: presenter1)
second_presentation = Presentation.create(presentation_title: "I love Lucy!", user: presenter1)
one = Discussion.create(user: sam,
  presentation: first_presentation,
  title: "Sam's Thoughts",
  content: "A discussion started by sam")
two = Discussion.create(reply_to: one,
  user: marge,
  presentation: first_presentation,
  content: "A reply to sam by marge")
three = Discussion.create(user: paul,
  presentation: second_presentation,
  title: "Paul's Story",
  content: "This is my story")