package recfun

object test {
    def balance(chars: List[Char]): Boolean = {
        def balanced(chars: List[Char], open: Int): Boolean =
          if (chars.isEmpty) open == 0
          else if (chars.head == '(') balanced(chars.tail,open+1)
          else if (chars.head == ')') open>0 && balanced(chars.tail,open-1)
          else balanced(chars.tail,open)
          
        balanced(chars,0)
    }                                             //> balance: (chars: List[Char])Boolean

	
	
	balance(""					.toList) == true
                                                  //> res0: Boolean = true
	balance("   "				.toList)	== true
                                                  //> res1: Boolean = true
	balance("    ("			.toList)	== false
                                                  //> res2: Boolean = true
	balance("(    "			.toList)	== false
                                                  //> res3: Boolean = true
	balance(")"					.toList) == false
                                                  //> res4: Boolean = true
	balance(")       "	.toList) == false //> res5: Boolean = true
	balance("       )"	.toList) == false //> res6: Boolean = true
	balance("()"				.toList) == true
                                                  //> res7: Boolean = true
	balance("      ()"	.toList) == true  //> res8: Boolean = true
	balance("()      "	.toList) == true  //> res9: Boolean = true
	balance("     ()     "			.toList) == true
                                                  //> res10: Boolean = true
	balance("     (      )     ".toList) == true
                                                  //> res11: Boolean = true
	balance("(("								.toList) == false
                                                  //> res12: Boolean = true
	balance("(      ("								.toList) == false
                                                  //> res13: Boolean = true
	balance("((      "								.toList) == false
                                                  //> res14: Boolean = true
	balance("     (     (      "			.toList) == false
                                                  //> res15: Boolean = true
	balance("(())"										.toList) == true
                                                  //> res16: Boolean = true
	balance("    (())     "						.toList) == true
                                                  //> res17: Boolean = true
	balance("(     ()     )"					.toList) == true
                                                  //> res18: Boolean = true
	balance("((       ))"							.toList) == true
                                                  //> res19: Boolean = true
	balance("   (   (   )  )"					.toList) == true
                                                  //> res20: Boolean = true
	balance("))"											.toList) == false
                                                  //> res21: Boolean = true
	balance("(()())"									.toList) == true
                                                  //> res22: Boolean = true
	
	balance("(()()"										.toList) == false
                                                  //> res23: Boolean = true
	balance("(()()))"									.toList) == false
                                                  //> res24: Boolean = true
}