#!/usr/bin/env bash

echo "Buscando issues..."

gh issue list --limit 100 --json number,title > issues.json

echo ""
echo "=== Possíveis duplicatas ==="
echo ""

jq -r '.[] | "\(.number)|\(.title)"' issues.json | while IFS="|" read -r num1 title1
do
  jq -r '.[] | "\(.number)|\(.title)"' issues.json | while IFS="|" read -r num2 title2
  do
    if [ "$num1" -lt "$num2" ]; then

      t1=$(echo "$title1" | tr '[:upper:]' '[:lower:]')
      t2=$(echo "$title2" | tr '[:upper:]' '[:lower:]')

      if [[ "$t1" == *"get /api/products"* && "$t2" == *"get /api/products"* ]]; then
        echo "#$num1 <-> #$num2"
        echo "  $title1"
        echo "  $title2"
        echo ""
      fi

      if [[ "$t1" == *"products/:id"* && "$t2" == *"products/:id"* ]]; then
        echo "#$num1 <-> #$num2"
        echo "  $title1"
        echo "  $title2"
        echo ""
      fi

      if [[ "$t1" == *"teste"* && "$t2" == *"teste"* ]]; then
        echo "#$num1 <-> #$num2"
        echo "  $title1"
        echo "  $title2"
        echo ""
      fi

    fi
  done
done

rm -f issues.json