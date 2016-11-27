branches=('first-steps-solution' 'hello')

for i in "${branches[@]}"
  do
   git checkout $i
   npm run build
  done
