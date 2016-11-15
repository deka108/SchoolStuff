dim="1x1"
landscape=""
files="*.pdf"

while getopts "d:f:l" flag; do
	case "${flag}" in
		f) files=${OPTARG};;
		d) dim=${OPTARG};;
		l) landscape="--landscape";;
		*) error "Unexpected option ${flag}";;
	esac
done

echo "Files are $files"

find . -type f -maxdepth 1 -name dm_files -exec pdfjam --nup $dim --suffix $dim $landscape {} \; 
