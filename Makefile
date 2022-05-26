LOG_INFO=$(shell date +"%H:%M:%S") \e[0;34mINFO\e[0m
LOG_ERROR=$(shell date +"%H:%M:%S") \e[1;31mERROR\e[0m
LOG_WARNING=$(shell date +"%H:%M:%S") \e[0;33mWARNING\e[0m
LOG_SUCCESS=$(shell date +"%H:%M:%S") \e[0;32mSUCCESS\e[0m


ROOT_DIR=$(shell git rev-parse --show-toplevel)
dest_mocha=$(ROOT_DIR)/pkgs/mocha
dest_latte=$(ROOT_DIR)/pkgs/latte
export ROOT_DIR

#? generate compressed packages for every accent
package:
	@echo -e "$(LOG_INFO) Preparing... 🐈"
	@mkdir -p $(dest_mocha)
	@mkdir -p $(dest_latte)
	@echo -e "$(LOG_INFO) Packaging all mocha Catppuccin accents 📦..."
	@for file in $(ROOT_DIR)/src/mocha/* ; do parsed="$${file##*/}" ; printf "   • $(LOG_WARNING) Packaging $${parsed}" ; zip -r -j -q $(dest_mocha)$${parsed}.zip $$file && printf "\t✅\n" || printf "\t❌\n" ; done
	@echo -e "$(LOG_INFO) Packaging all latte Catppuccin accents 📦..."
	@for file in $(ROOT_DIR)/src/latte/* ; do parsed="$${file##*/}" ; printf "   • $(LOG_WARNING) Packaging $${parsed}" ; zip -r -j -q $(dest_latte)$${parsed}.zip $$file && printf "\t✅\n" || printf "\t❌\n" ; done
	@echo -e "$(LOG_SUCCESS) Packages ready at $(dest)! 🥳"
