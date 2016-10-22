loaded_languages['Haskell'] = {

  metadata: {
    name: "Haskell",
    description: "A statically typed lazy functional programming language."
  },

  '::': {
    description: "Type ascription.",

    examples: [
      {
        description: "At the top level of a program, gives a type signature for a definition.",
        code: [
          "inc :: Int -> Int",
          "inc x = x + 1"
        ],
        pronunciation: "ink, has type, int, to int. ink, x, equals, x plus one."
      },

      {
        description: "As an expression <code>e :: t</code>, checks that the inferred type of the expression <code>e</code> matches the type signature <code>t</code>, and evaluates to <code>e</code>.",
        code: [
          "showRead :: String -> String",
          "showRead x = show (read x :: Int)"
        ],
        pronunciation: "show reed, has type, string, to string. show reed, ex, equals, show of: reed ex, as int."
      },

      {
        description: "In GHCi, can be used within <code>let</code> to give a type signature for a definition.",
        code: [
          "let inc :: Int -> Int; inc x = x + 1"
        ],
        pronunciation: "let ink, have type, int, to int. inc, ex, equals, ex plus one."
      }
    ]
  },

  '->': {
    description: "Function type operator, lambda body introducer, functional dependency operator, and arrow kind operator. See also: <code>=&gt;</code>.",

    examples: [
      {
        description: "In a type signature, <code>a -&gt; b</code> denotes the type of functions accepting an argument of type <code>a</code> and returning a result of type <code>b</code>. See also: <code>::</code>.",
        code: [
          "chr :: Int -> Char",
        ],
        pronunciation: "CHR, has type, int, to char."
      },

      {
        description: "In a lambda expression <code>\\x y -&gt; e</code>, separates the parameter names <code>x y</code> from the body <code>e</code>.",
        code: [
          "inc = \\x -> x + 1"
        ],
        pronunciation: "inc, equals, lambda ex, to ex plus one."
      },

      {
        description: "In a functional dependency specifier <code>a b -&gt; c</code>, when using <a href='https://wiki.haskell.org/Functional_dependencies'>functional dependencies</a>, specifies that the type parameter <code>c</code> is fully determined by the type parameters <code>a</code> and <code>b</code>.",
        code: [
          "class Multiplies a b c | a b -> c where",
          "  (*) :: a -> b -> c"
        ],
        pronunciation: "class multiplies, ABC, such that a and b determine c, where, times has type A to B to C."
      },

      {
        description: "In a kind signature, when using KindSignatures, <code>a -&gt; b</code> denotes the kind of type constructors taking a type of kind <code>a</code> as an argument and producing a type of kind <code>b</code>.",
        code: [
          "{-# LANGUAGE KindSignatures #-}",
          "class Monad (m :: * -> *) where",
          "  return :: a -> m a",
          "  (>>=) :: m a -> (a -> m b) -> m b"
        ],
        pronunciation: "prag ma, language, kind signatures, end prag ma. class, monad, em, having kind, star, to star. Where. Return has type ay, to em ay. And bind has type, em ay, to, ay to em bee, to em bee."
      }
    ],
  },

  '.': {
    description: "Quantifier body separator. See also: <code>..</code>.",

    examples: [
      {
        description: "In a type signature <code>forall a b. t</code>, when using RankNTypes or ExplicitQuantification, separates quantified variables <code>a b</code> from the quantified type <code>t</code>.",
        code: [
          "runST :: forall a. (forall s. ST s a) -> a"
        ],
        pronunciation: "run ess tea, has type, for all ay: for all ess, ess tea ess ay, to ay."
      },
    ]
  },

  '|': {
    description: "Guard clause specifier, functional dependency specifier.",

    examples: [
      {
        description: "In a function definition, specifies a constraint on a function equation.",

        code: [
          "assertPositive :: Int -> Int",
          "assertPositive x",
          "  | x > 0 = x",
          "  | otherwise = undefined"
        ],

        pronunciation: "assert positive, has type, int, to int. assert positive, ex, when ex is greater than zero, equals, ex. When otherwise, equals, undefined."
      },

      {
        description: "In a functional dependency specification, separates typeclass parameters from functional dependencies.",

        // FIXME: Same example as "->": consolidate somehow?
        code: [
          "class Multiplies a b c | a b -> c where",
          "  (*) :: a -> b -> c"
        ],

        pronunciation: "class multiplies, ABC, such that a and b determine c, where, times has type A to B to C."
      }
    ],
  }

};
